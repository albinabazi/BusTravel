package com.bustravel.payment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bustravel.payment.entities.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer>{
    
}