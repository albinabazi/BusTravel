package com.bustravel.payment.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.bustravel.payment.entities.Recipe;
import com.bustravel.payment.services.RecipeService;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.bustravel.payment.DTO.RecipeDTO;


@RestController
public class RecipeController {
    
    private RecipeService recipeService;

    public RecipeController(RecipeService recipeService){
        this.recipeService = recipeService;
    }

    @GetMapping("/recipes")
    public Page<Recipe> findAll(Pageable pageable) {
        return recipeService.findAll(pageable);
    }
    
    @GetMapping("/recipes/{id}")
    public Recipe getRecipeById(@PathVariable("id") Integer id) {
        return recipeService.findById(id);
    }

    @PostMapping("/recipes")
    @ResponseStatus(HttpStatus.CREATED)
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeService.save(recipe);
    }

    @PutMapping("/recipes/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable("id") Integer id, @RequestBody Recipe recipe) {
        
        if(id == null || recipe == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(recipeService.updateRecipe(id, recipe));
    }

    @PatchMapping("/recipes/{id}")
    public ResponseEntity<RecipeDTO> patchRecipe(@PathVariable("id") Integer id, @RequestBody RecipeDTO recipeDTO){

        RecipeDTO patched= recipeService.patchRecipe(id, recipeDTO);
        
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping("/recipes/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRecipe(@PathVariable("id") Integer id){
        recipeService.delete(id);
    }
}