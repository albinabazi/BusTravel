package com.bustravel.busReservation.mbrojtje;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class FestivaliServiceImpl implements FestivaliService {

    @Autowired
    private FestivaliRepository festivaliRepository;

    @Override
    public Page<Festivali> findAll(Pageable pageable){
        return festivaliRepository.findAll(pageable);
    }

    @Override
    public Festivali findById(Integer id){

        Festivali reservation= festivaliRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation with id "+ id + " is not found"));
        
        return reservation;
    }

    @Override
    public Festivali save (Festivali reservation){
        return festivaliRepository.save(reservation);
    }

    @Override
    public Festivali updateFestivali(Integer id, Festivali reservation){

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