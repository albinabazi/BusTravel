package com.bustravel.payment.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.payment.DTO.RecipeDTO;
import com.bustravel.payment.entities.Recipe;
import com.bustravel.payment.mappers.RecipeMapper;
import com.bustravel.payment.repositories.RecipeRepository;

@Service
public class RecipeServiceImpl implements RecipeService{
    
    private RecipeRepository recipeRepository;

    public RecipeServiceImpl(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    public Page<Recipe> findAll(Pageable pageable){
        return recipeRepository.findAll(pageable);
    }

    @Override
    public Recipe findById(Integer id){

        Recipe recipe= recipeRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Recipe with id "+ id + " is not found"));
        
        return recipe;
    }

    @Override
    public Recipe save (Recipe recipe){
        return recipeRepository.save(recipe);
    }

    @Override
    public Recipe updateRecipe(Integer id, Recipe recipe){

        recipeRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Recipe with id "+ id + " is not found"));
        
            recipe.setId(id);

        return recipeRepository.save(recipe);
    }

    @Override
    public RecipeDTO patchRecipe(Integer id, RecipeDTO recipeDTO){

        Recipe recipe = findById(id);

        RecipeMapper.mapDtoToEntity(recipeDTO, recipe);

        Recipe patched = recipeRepository.save(recipe);

        return RecipeMapper.mapEntityToDto(patched);
    }

    @Override
    public void delete(Integer id){
        recipeRepository.deleteById(id);
    }
}