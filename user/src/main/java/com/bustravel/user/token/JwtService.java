package com.bustravel.user.token;

import java.time.Instant;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.crypto.SecretKey;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    
    public static final String SECRET = "2CF2C19D321C9207D3905E1E79C175D59B6F489AB6FEED4419D85884E36793197CAEAD471E1B9954C5FAC558F878F26A3C6A085B24DA9429108C541982486AD7";
    private static final long VALIDITY = TimeUnit.MINUTES.toMillis(30);


    public String generateToken(UserDetails userDetails){
        Map<String, String> claims = new HashMap<>();
        claims.put("iss", "http://localhost:8080/realms/bustravel");

        String role = userDetails.getAuthorities().stream()
                             .map(GrantedAuthority::getAuthority)
                             .findFirst()
                             .orElse("USER");

        claims.put("role", role);

        return Jwts.builder()
                .claims(claims)
                .subject(userDetails.getUsername())
                .issuedAt(Date.from(Instant.now()))
                .expiration(Date.from(Instant.now().plusMillis(VALIDITY)))
                .signWith(generateKey())
                .compact();
    }

    private SecretKey generateKey() {
        byte[] decodedKey = Base64.getDecoder().decode(SECRET);
        return Keys.hmacShaKeyFor(decodedKey);
    }

    public String extractEmail(String jwt) {
        Claims claims = getClaims(jwt);
        return claims.getSubject();
    }

    private Claims getClaims(String jwt) {
        return Jwts.parser()
            .verifyWith(generateKey())
            .build()
            .parseSignedClaims(jwt)
            .getPayload();
    }

    public boolean isTokenValid(String jwt) {
        Claims claims = getClaims(jwt);
        return claims.getExpiration().after(Date.from(Instant.now()));
    }
}
