package com.bustravel.payment.mappers;

import com.bustravel.payment.DTO.RecipeDTO;
import com.bustravel.payment.entities.Recipe;

public class RecipeMapper {
    public static void mapDtoToEntity(RecipeDTO dto, Recipe entity){
        
        if(dto.getTitle() != null){
            entity.setTitle(dto.getTitle());
        }

        if(dto.getDifficulty() != null){
            entity.setDifficulty(dto.getDifficulty());
        }

        if(dto.getChef() != null){
            entity.setChef(dto.getChef());
        }
    }

    public static RecipeDTO mapEntityToDto(Recipe entity){
        RecipeDTO dto = new RecipeDTO();

        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setDifficulty(entity.getDifficulty());
        dto.setChef(entity.getChef());

        return dto;
    }
}
