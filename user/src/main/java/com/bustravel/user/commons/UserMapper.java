package com.bustravel.user.commons;

import com.bustravel.user.UserDto;
import com.bustravel.user.UserEntity;

public class UserMapper {
    
    public static void mapDtoToEntity(UserDto dto, UserEntity entity){
        /*
         * private long id;
            private String userName;
            private String email;
            private String password;
         */

         if(dto.getUserName() != null){
            entity.setUserName(dto.getUserName());
         }

         if(dto.getEmail() !=null){
            entity.setEmail(dto.getEmail());
         }

         if(dto.getPassword() !=null){
            entity.setPassword(dto.getPassword());
         }
    }

    public static UserDto mapEntityToDto(UserEntity entity){
        UserDto dto = new UserDto();

        dto.setId(entity.getId());
        dto.setUserName(entity.getUserName());
        dto.setEmail(entity.getEmail());
        dto.setPassword(entity.getPassword());
       
        return dto;
    }
}
