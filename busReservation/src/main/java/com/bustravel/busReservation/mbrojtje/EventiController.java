package com.bustravel.busReservation.mbrojtje;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/evente")
public class EventiController {

    @Autowired
    private EventiService eventiService;

    @GetMapping
    public Page<Eventi> findAll(Pageable pageable){
        return eventiService.findAll(pageable);
    }

    @PostMapping
    public ResponseEntity<Eventi> createEventi(@RequestBody EventiDTO eventiDTO) {
        // Use the service to create the event
        Eventi eventi = eventiService.createEventi(eventiDTO);
        
        // Return the saved event
        return ResponseEntity.status(HttpStatus.CREATED).body(eventi);
    }

    @GetMapping("/festival/{festivalId}")
    public ResponseEntity<List<Eventi>> getEventsByFestival(@PathVariable(name = "festivalId") Integer festivalId) {
        List<Eventi> eventi = eventiService.getEventsByFestival(festivalId);
        return ResponseEntity.ok(eventi);
    }

}