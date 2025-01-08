package com.bustravel.payment.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bustravel.payment.DTO.ChefDTO;
import com.bustravel.payment.entities.Chef;

public interface ChefService {
    Page<Chef> findAll(Pageable pageable);
    Chef findById(Integer id);
    Chef save(Chef chef);
    Chef updateChef(Integer id, Chef chef);
    ChefDTO patchChef(Integer id, ChefDTO chefDTO);
    void delete(Integer id);
}