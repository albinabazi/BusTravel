package com.bustravel.payment.DTO;

import com.bustravel.payment.entities.Chef;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class RecipeDTO {

    private Integer id;

    private String title;

    private String difficulty;

    @ManyToOne
    @JoinColumn(name = "chef_id")
    @JsonIgnore
    private Chef chef;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public Chef getChef() {
        return chef;
    }

    public void setChef(Chef chef) {
        this.chef = chef;
    }
}
