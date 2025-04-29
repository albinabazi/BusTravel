package com.bustravel.busReservation.mbrojtje;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class GroupServiceImpl implements GroupService {
    
    @Autowired
    private GroupRepository festivaliRepository;

    @Override
    public Page<Group> findAll(Pageable pageable){
        return festivaliRepository.findAll(pageable);
    }

    @Override
    public Group findById(Integer id){

        Group reservation= festivaliRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation with id "+ id + " is not found"));
        
        return reservation;
    }

    @Override
    public Group save (Group reservation){
        return festivaliRepository.save(reservation);
    }

    @Override
    public Group updateFestivali(Integer id, Group reservation){

        festivaliRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation with id "+ id + " is not found"));
        
        reservation.setId(id);

        return festivaliRepository.save(reservation);
    }

    @Override
    public void delete(Integer id){
        festivaliRepository.deleteById(id);
    }
}
