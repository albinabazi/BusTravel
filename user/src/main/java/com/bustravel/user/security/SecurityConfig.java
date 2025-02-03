package com.bustravel.user.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(jsr250Enabled = true)
public class SecurityConfig {

    private final JwtAuthConverter jwtAuthConverter;

    public SecurityConfig(JwtAuthConverter jwtAuthConverter) {
        this.jwtAuthConverter = jwtAuthConverter;
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        
        http.authorizeHttpRequests(customizer -> {
            customizer
                .requestMatchers("/users/**").hasRole("USER")
                .anyRequest().authenticated();
        });

        http.oauth2ResourceServer(customizer -> {
            customizer.jwt(jwtCustomizer -> {
                jwtCustomizer.jwtAuthenticationConverter(jwtAuthConverter);
            });
        });
        
        http.sessionManagement(customizer -> {
            customizer.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        });

        return http.build();
    }
}