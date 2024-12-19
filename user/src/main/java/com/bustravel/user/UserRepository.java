package com.bustravel.user;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{
    
    Set<UserEntity> findByUserNameOrEmailIgnoreCase(String userName, String email);
}