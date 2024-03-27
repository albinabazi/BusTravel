package com.lab2TeamBusTravel.bustravel.users;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserServiceImpl implements UserService{

    UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserEntity save(UserEntity userEntity) {
        
        if(userEntity.getFirstName() == null || userEntity.getFirstName().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "First Name should not be empty");
        }
        if(userEntity.getLastName() == null || userEntity.getLastName().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Last Name should not be empty");
        }
        if(userEntity.getEmail() == null || userEntity.getEmail().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email should not be empty");
        }
        if(userEntity.getPassword() == null || userEntity.getPassword().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password should not be empty");
        }
        return userRepository.save(userEntity);
    }
    
}
