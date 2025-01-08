package com.bustravel.payment.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bustravel.payment.DTO.RecipeDTO;
import com.bustravel.payment.entities.Recipe;

public interface RecipeService {
    Page<Recipe> findAll(Pageable pageable);
    Recipe findById(Integer id);
    Recipe save(Recipe recipe);
    Recipe updateRecipe(Integer id, Recipe recipe);
    RecipeDTO patchRecipe(Integer id, RecipeDTO recipeDTO);
    void delete(Integer id);
}