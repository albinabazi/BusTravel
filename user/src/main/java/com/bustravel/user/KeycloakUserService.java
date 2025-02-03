package com.bustravel.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class KeycloakUserService {

    @Autowired
    private KeycloakService keycloakService;

    public KeycloakUserService (KeycloakService keycloakService){
        this.keycloakService=keycloakService;
    }

    private final RestTemplate restTemplate = new RestTemplate();

    // Method to retrieve access token
    public String getAccessToken() {
        String tokenUrl = keycloakService.getAuthServerUrl() + "/realms/" + keycloakService.getRealm() + "/protocol/openid-connect/token";

        // Prepare request body
        String requestBody = "grant_type=client_credentials" +
                             "&client_id=" + keycloakService.getClientId() +
                             "&client_secret=" + keycloakService.getClientSecret();

        // Set headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // Prepare request
        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<Map> response = restTemplate.exchange(tokenUrl, HttpMethod.POST, request, Map.class);
            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                return response.getBody().get("access_token").toString();
            } else {
                throw new RuntimeException("Failed to retrieve access token from Keycloak.");
            }
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching access token: " + e.getMessage(), e);
        }
    }

    // Method to create user in Keycloak
    public void createUser(String email, String firstName, String lastName, String password) {
        String accessToken = getAccessToken();
        String createUserUrl = keycloakService.getAuthServerUrl() + "/admin/realms/" + keycloakService.getRealm() + "/users";

        // Prepare user data
        Map<String, Object> user = new HashMap<>();
        user.put("email", email);
        user.put("firstName", firstName);
        user.put("lastName", lastName);
        user.put("enabled", true);
        user.put("credentials", new Map[]{
                Map.of(
                        "type", "password",
                        "value", password,
                        "temporary", false
                )
        });

        // Set headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(accessToken);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(user, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(createUserUrl, request, String.class);
            if (response.getStatusCode() == HttpStatus.CREATED) {
                System.out.println("User created successfully in Keycloak.");
            } else {
                throw new RuntimeException("Failed to create user. Status: " + response.getStatusCode());
            }
        } catch (Exception e) {
            throw new RuntimeException("Error while creating user in Keycloak: " + e.getMessage(), e);
        }
    }
}