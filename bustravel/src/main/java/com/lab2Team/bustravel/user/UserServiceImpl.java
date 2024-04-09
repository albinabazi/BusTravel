package com.lab2Team.bustravel.user;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserServiceImpl implements UserService{
    
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserEntity addNew(UserEntity userEntityntity) {
        
        if(userEntityntity.getFirstName().isEmpty() || userEntityntity.getFirstName() == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User first name canot be empty or blank" );
        }
        if(userEntityntity.getLastName().isEmpty() || userEntityntity.getLastName() == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User last name canot be empty or blank" );
        }
        if(userEntityntity.getEmail().isEmpty() || userEntityntity.getEmail() == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User email canot be empty or blank" );
        }
        if(userEntityntity.getPassword().isEmpty() || userEntityntity.getPassword() == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User password canot be empty or blank" );
        }
        
        return userRepository.save(userEntityntity);
    }

}