package com.bustravel.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.user.commons.UserMapper;
//import com.bustravel.user.utilities.UserContextHolder;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    private final KeycloakUserService keycloakUserService;

    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, KeycloakUserService keycloakUserService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.keycloakUserService = keycloakUserService;
        this.passwordEncoder=passwordEncoder;
    }

    @Override
    public UserEntity findById(Long id) {
        
        UserEntity userEntity= userRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User with id "+ id + " is not found"));

        //String email = UserContextHolder.getContext().getUserEmail();
        //Long userId = UserContextHolder.getContext().getUserId();
        //String authToken= UserContextHolder.getContext().getAuthToken();

        return userEntity;
    }

    @Override
    public UserEntity save(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    @Override
    public Page<UserEntity> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    /*@Override
    public Set<UserEntity> findByNameOrEmail(String username, String email) {
        
        Set<UserEntity> userEntities = userRepository.findByUserNameOrEmailIgnoreCase(username, email);
        if(userEntities.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User with name "+username+" not found");
        }
        return userEntities;
    } */

    @Override
    public void delete(Long id){

        userRepository.deleteById(id);
    }

    @Override
    public UserEntity updateUser(Long id, UserEntity userEntity){
        
        UserEntity existingUser = userRepository.findById(id).orElseThrow(
        () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User with id " + id + " is not found"));

        userEntity.setId(existingUser.getId());

        return userRepository.save(userEntity);
    }

    @Override
    public UserDto patchUser(Long id, UserDto userDto) {
        
        UserEntity userEntity= this.findById(id);

        UserMapper.mapDtoToEntity(userDto, userEntity);

        UserEntity patched= userRepository.save(userEntity);

        return UserMapper.mapEntityToDto(patched);
    }

    @Override
    public UserEntity findByEmail(String email){

        return userRepository.findByEmailIgnoreCase(email).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User with email "+ email + " is not found"));
    }

    @Override
    @Transactional
    public String registerUser(UserDto userDTO) {
        // Step 1: Save the user to MySQL database
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setFirstName(userDTO.getFirstName());
        userEntity.setLastName(userDTO.getLastName());
        userEntity.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userEntity.setRole("USER");

        userRepository.save(userEntity);  // Save to MySQL

        // Step 2: Register user in Keycloak
        try {
            // Register user in Keycloak
            keycloakUserService.createUser(
                userDTO.getEmail(), 
                userDTO.getFirstName(), 
                userDTO.getLastName(), 
                userDTO.getPassword()
            );

            // Step 3: Assign the role to the user in Keycloak
            String userId = keycloakUserService.getUserIdFromEmail(userDTO.getEmail());  // Get user ID from email
            if (userId != null) {
                keycloakUserService.assignRoleToUser(userId, "user", "bustravel");  // Assign 'user' role
                return "User registered successfully in both MySQL and Keycloak!";
            } else {
                throw new RuntimeException("Failed to retrieve user ID from Keycloak.");
            }
        } catch (Exception e) {
            return "User created in MySQL, but failed to register in Keycloak. Error: " + e.getMessage();
        }
    }
}