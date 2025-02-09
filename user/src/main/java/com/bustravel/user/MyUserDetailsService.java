package com.bustravel.user;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService{
    
    private UserRepository repository;

    public MyUserDetailsService(UserRepository repository){
        this.repository=repository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UserEntity> user = repository.findByEmailIgnoreCase(email);
        if (user.isPresent()) {
            var userObj = user.get();
            return User.builder()
                    .username(userObj.getEmail())   
                    .password(userObj.getPassword())
                    .authorities(getAuthorities(userObj))
                    .build();        
        } else {
            throw new UsernameNotFoundException(email);
        }
    }

    private List<GrantedAuthority> getAuthorities(UserEntity user) {
        if (user.getRole() == null) {
            return List.of(new SimpleGrantedAuthority("USER"));
        }
        
        return Arrays.stream(user.getRole().split(","))
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
    }

}