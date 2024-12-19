package com.bustravel.user;

import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    
    UserEntity findById(Long id);
    UserEntity save(UserEntity userEntity);
    Page<UserEntity> findAll(Pageable pageable);
    Set<UserEntity> findByNameOrEmail(String userName, String email);
    void delete(Long id);
    UserEntity updateUser(Long id, UserEntity userEntity);
    UserDto patchUser(Long id, UserDto userDto);
}
