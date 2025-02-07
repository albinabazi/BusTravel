package com.bustravel.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class KeycloakUserService {

    @Autowired
    private KeycloakService keycloakService;

    private final RestTemplate restTemplate = new RestTemplate();

    public KeycloakUserService(KeycloakService keycloakService) {
        this.keycloakService = keycloakService;
    }

    // ✅ Retrieve Keycloak Access Token
    public String getAccessToken() {
        String tokenUrl = keycloakService.getAuthServerUrl() + "/realms/" +
                keycloakService.getRealm() + "/protocol/openid-connect/token";
        String requestBody = "grant_type=client_credentials" +
                "&client_id=" + keycloakService.getClientId() +
                "&client_secret=" + keycloakService.getClientSecret();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);

        ResponseEntity<Map> response = restTemplate.exchange(tokenUrl, HttpMethod.POST, request, Map.class);
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            return (String) response.getBody().get("access_token");
        }
        throw new RuntimeException("Failed to retrieve access token from Keycloak.");
    }

    // ✅ Create User in Keycloak
    public void createUser(String email, String firstName, String lastName, String password) {
        String accessToken = getAccessToken();
        String createUserUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" +
                keycloakService.getRealm() + "/users";

        Map<String, Object> user = new HashMap<>();
        user.put("email", email);
        user.put("firstName", firstName);
        user.put("lastName", lastName);
        user.put("enabled", true);
        user.put("credentials", List.of(Map.of(
                "type", "password",
                "value", password,
                "temporary", false
        )));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(accessToken);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(user, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(createUserUrl, request, String.class);
            if (response.getStatusCode() == HttpStatus.CREATED) {
                System.out.println("✅ User created successfully in Keycloak.");
                String userId = getUserId(email, accessToken);
                if (userId != null) {
                    assignClientRoleToUser(userId, "user", "bustravel", accessToken);
                } else {
                    System.err.println("❌ Failed to retrieve user ID from Keycloak.");
                }
            } else {
                throw new RuntimeException("❌ Failed to create user in Keycloak. Status: " + response.getStatusCode());
            }
        } catch (Exception e) {
            System.err.println("❌ Error while creating user in Keycloak: " + e.getMessage());
            throw new RuntimeException("❌ Error while creating user in Keycloak", e);
        }
    }

    // ✅ Get User ID from Keycloak by Email
    private String getUserId(String email, String accessToken) {
        String usersUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" +
                keycloakService.getRealm() + "/users?email=" + email;

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<List> response = restTemplate.exchange(usersUrl, HttpMethod.GET, request, List.class);
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null && !response.getBody().isEmpty()) {
            return (String) ((Map<String, Object>) response.getBody().get(0)).get("id");
        } else {
            System.err.println("❌ No user found with email: " + email);
            return null;
        }
    }

    // ✅ Assign Client Role to User
    private void assignClientRoleToUser(String userId, String roleName, String clientId, String accessToken) {
        // 1️⃣ Get Client UUID
        String clientUuid = getClientUuid(clientId, accessToken);
        if (clientUuid == null) {
            System.err.println("❌ Client not found: " + clientId);
            return;
        }

        // 2️⃣ Get Role Details
        String roleUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" +
                keycloakService.getRealm() + "/clients/" + clientUuid + "/roles/" + roleName;

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<Map> roleResponse = restTemplate.exchange(roleUrl, HttpMethod.GET, request, Map.class);
        if (roleResponse.getStatusCode() == HttpStatus.OK && roleResponse.getBody() != null) {
            Map<String, Object> role = roleResponse.getBody();

            // 3️⃣ Assign the Role to the User
            String assignRoleUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" +
                    keycloakService.getRealm() + "/users/" + userId + "/role-mappings/clients/" + clientUuid;

            HttpEntity<List<Map<String, Object>>> roleRequest = new HttpEntity<>(List.of(role), headers);
            restTemplate.postForEntity(assignRoleUrl, roleRequest, String.class);
            System.out.println("✅ Role '" + roleName + "' assigned to user.");
        } else {
            System.err.println("❌ Failed to retrieve client role information.");
        }
    }

    // ✅ Get Client UUID from Keycloak
    private String getClientUuid(String clientId, String accessToken) {
        String clientsUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" +
                keycloakService.getRealm() + "/clients?clientId=" + clientId;

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<List> response = restTemplate.exchange(clientsUrl, HttpMethod.GET, request, List.class);
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            for (Object obj : response.getBody()) {
                Map<String, Object> client = (Map<String, Object>) obj;
                if (clientId.equals(client.get("clientId"))) {
                    return (String) client.get("id");
                }
            }
        }
        System.err.println("❌ Client not found with ID: " + clientId);
        return null;
    }

    public String getUserIdFromEmail(String email) {
        String accessToken = getAccessToken();
        String usersUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" + keycloakService.getRealm() + "/users?email=" + email;

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<List> response = restTemplate.exchange(usersUrl, HttpMethod.GET, request, List.class);
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null && !response.getBody().isEmpty()) {
            return (String) ((Map<String, Object>) response.getBody().get(0)).get("id");
        }
        return null; // Return null if user not found
    }

    // ✅ Assign Client Role to User in Keycloak
    public void assignRoleToUser(String userId, String roleName, String clientId) {
        String accessToken = getAccessToken();
        String clientUuid = getClientUuid(clientId, accessToken);
        if (clientUuid == null) {
            System.err.println("❌ Client not found: " + clientId);
            return;
        }

        String roleUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" + keycloakService.getRealm() + "/clients/" + clientUuid + "/roles/" + roleName;
        
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<Map> roleResponse = restTemplate.exchange(roleUrl, HttpMethod.GET, request, Map.class);
        if (roleResponse.getStatusCode() == HttpStatus.OK && roleResponse.getBody() != null) {
            Map<String, Object> role = roleResponse.getBody();
            
            String assignRoleUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" + keycloakService.getRealm() + "/users/" + userId + "/role-mappings/clients/" + clientUuid;
            
            HttpEntity<List<Map<String, Object>>> roleRequest = new HttpEntity<>(List.of(role), headers);
            restTemplate.postForEntity(assignRoleUrl, roleRequest, String.class);
            System.out.println("✅ Role '" + roleName + "' assigned to user.");
        } else {
            System.err.println("❌ Failed to retrieve client role information.");
        }
    }
}