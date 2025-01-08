package com.bustravel.payment.DTO;

import java.util.Set;

import com.bustravel.payment.entities.Recipe;

import jakarta.persistence.Column;

public class ChefDTO {
    
    private Integer id;

    private String name;

    @Column(name= "birth_year")
    private Integer birthYear;

    private Set<Recipe> recipes;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(Integer birthYear) {
        this.birthYear = birthYear;
    }

    public Set<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(Set<Recipe> recipes) {
        this.recipes = recipes;
    }
}