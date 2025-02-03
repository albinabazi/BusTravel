package com.bustravel.user.utilities;

public class UserContextHolder {
    
    private static final ThreadLocal<UserContext> userContext = new ThreadLocal<>();

    public static UserContext getContext(){
        UserContext userCx = userContext.get();

        if(userCx == null){
            userCx = createEmptyContext();
            userContext.set(userCx);
        }

        return userContext.get();
    }

    public static void setContext(UserContext userCx){
        userContext.set(userCx);
    }

    private static UserContext createEmptyContext() {
        return new UserContext();
    }
}
