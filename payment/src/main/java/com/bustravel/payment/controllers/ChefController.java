package com.bustravel.payment.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.bustravel.payment.DTO.ChefDTO;
import com.bustravel.payment.entities.Chef;
import com.bustravel.payment.services.ChefService;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class ChefController {
    
    private ChefService chefService;

    public ChefController(ChefService chefService) {
        this.chefService = chefService;
    }

    @GetMapping("/chefs")
    public Page<Chef> findAll(Pageable pageable) {
        return chefService.findAll(pageable);
    }
    
    @GetMapping("/chefs/{id}")
    public Chef getChefById(@PathVariable("id") Integer id) {
        return chefService.findById(id);
    }
    
    @PostMapping("/chefs")
    @ResponseStatus(HttpStatus.CREATED)
    public Chef createChef(@RequestBody Chef chef) {
        return chefService.save(chef);
    }
    
    @PutMapping("/chefs/{id}")
    public ResponseEntity<Chef> updateChef(@PathVariable("id") Integer id, @RequestBody Chef chef) {
        
        if(id == null || chef == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(chefService.updateChef(id, chef));
    }

    @PatchMapping("/chefs/{id}")
    public ResponseEntity<ChefDTO> patchChef(@PathVariable("id") Integer id, @RequestBody ChefDTO chefDTO){

        ChefDTO patched= chefService.patchChef(id, chefDTO);
        
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping("/chefs/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteChef(@PathVariable("id") Integer id){
        chefService.delete(id);
    }
}