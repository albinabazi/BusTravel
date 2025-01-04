package com.bustravel.user;

import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.user.commons.UserMapper;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserEntity findById(Long id) {
        
        UserEntity userEntity= userRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User with id "+ id + " is not found"));
        
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

    @Override
    public Set<UserEntity> findByNameOrEmail(String userName, String email) {
        
        Set<UserEntity> userEntities = userRepository.findByUserNameOrEmailIgnoreCase(userName, email);
        if(userEntities.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User with name "+userName+" not found");
        }
        return userEntities;
    }

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
}