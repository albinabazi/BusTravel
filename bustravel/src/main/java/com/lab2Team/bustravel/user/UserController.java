package com.lab2Team.bustravel.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@RestController
public class UserController {
    
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path="/user")
    @ResponseStatus(HttpStatus.CREATED)
    public UserEntity createNew(@RequestBody UserEntity userEntityntity) {
        
        return userService.addNew(userEntityntity);
    }
    
}