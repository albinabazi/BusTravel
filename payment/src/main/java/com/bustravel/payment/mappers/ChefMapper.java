package com.bustravel.payment.mappers;

import com.bustravel.payment.DTO.ChefDTO;
import com.bustravel.payment.entities.Chef;

public class ChefMapper {
    
    public static void mapDtoToEntity(ChefDTO dto, Chef entity){
        
        if(dto.getName() != null){
            entity.setName(dto.getName());
        }

        if(dto.getBirthYear() != null){
            entity.setBirthYear(dto.getBirthYear());
        }

        if(dto.getRecipes() != null){
            entity.setRecipes(dto.getRecipes());
        }
    }

    public static ChefDTO mapEntityToDto(Chef entity){
        ChefDTO dto = new ChefDTO();

        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setBirthYear(entity.getBirthYear());
        dto.setRecipes(entity.getRecipes());

        return dto;
    }
}
