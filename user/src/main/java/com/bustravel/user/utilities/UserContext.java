package com.bustravel.user.utilities;

import org.springframework.stereotype.Component;

@Component
public class UserContext {
    
    public static final String USER_ID = "id";
    public static final String USER_EMAIL = "email";

    private  String authToken;
    private  Long userId;
    private  String userEmail;
    
    public String getAuthToken() {
        return authToken;
    }
    
    public void setAuthToken(String authToken) {
        this.authToken = authToken;
    }
    
    public Long getUserId() {
        return userId;
    }
    
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    
    public String getUserEmail() {
        return userEmail;
    }
    
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}