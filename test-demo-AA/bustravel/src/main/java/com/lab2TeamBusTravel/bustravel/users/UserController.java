package com.lab2TeamBusTravel.bustravel.users;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@CrossOrigin
public class UserController {
    
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    
    @PostMapping(path = "/users")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity userEntity) {
        
        UserEntity created = userService.save(userEntity);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}
