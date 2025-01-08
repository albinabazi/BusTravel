package com.bustravel.payment.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.payment.DTO.ChefDTO;
import com.bustravel.payment.entities.Chef;
import com.bustravel.payment.mappers.ChefMapper;
import com.bustravel.payment.repositories.ChefRepository;

@Service
public class ChefServiceImpl implements ChefService{
    
    private ChefRepository chefRepository;

    public ChefServiceImpl(ChefRepository chefRepository) {
        this.chefRepository = chefRepository;
    }

    @Override
    public Page<Chef> findAll(Pageable pageable){
        return chefRepository.findAll(pageable);
    }

    @Override
    public Chef findById(Integer id){

        Chef chef= chefRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Chef with id "+ id + " is not found"));
        
        return chef;
    }

    @Override
    public Chef save (Chef chef){
        return chefRepository.save(chef);
    }

    @Override
    public Chef updateChef(Integer id, Chef chef){

        chefRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Chef with id "+ id + " is not found"));
        
            chef.setId(id);

        return chefRepository.save(chef);
    }

    @Override
    public ChefDTO patchChef(Integer id, ChefDTO chefDTO){

        Chef chef = findById(id);

        ChefMapper.mapDtoToEntity(chefDTO, chef);

        Chef patched = chefRepository.save(chef);

        return ChefMapper.mapEntityToDto(patched);
    }

    @Override
    public void delete(Integer id){
        chefRepository.deleteById(id);
    }
}