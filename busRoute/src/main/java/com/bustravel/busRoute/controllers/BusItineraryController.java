package com.bustravel.busRoute.controllers;

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
import org.springframework.web.bind.annotation.RestController;

import com.bustravel.busRoute.DTOs.BusItineraryDTO;
import com.bustravel.busRoute.entities.BusItinerary;
import com.bustravel.busRoute.services.BusItineraryService;

@RestController
public class BusItineraryController {

    private BusItineraryService busItineraryService;

    public BusItineraryController(final BusItineraryService busItineraryService) {
        this.busItineraryService = busItineraryService;
    }

    @GetMapping(path= "/busItineraries")
    public Page<BusItinerary> findAll(Pageable pageable){
        return busItineraryService.findAll(pageable);
    }

    @GetMapping(path= "/busItineraries/{id}")
    public BusItinerary getBusItineraryById(@PathVariable(name= "id") Integer id) {
        return busItineraryService.findBusItineraryById(id);
    }

    @PostMapping(path= "/busItineraries")
    @ResponseStatus(HttpStatus.CREATED)
    public BusItinerary createBusItinerary(@RequestBody BusItinerary busItinerary) {
        return busItineraryService.saveBusItinerary(busItinerary);
    }

    @PutMapping(path= "/busItineraries/{id}")
    public ResponseEntity<BusItinerary> updateBusItinerary(@PathVariable(name="id") Integer id, @RequestBody BusItinerary busItinerary) {
        
        if(id == null || busItinerary == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(busItineraryService.updateBusItinerary(id, busItinerary));
    }

    @PatchMapping(path= "/busItineraries/{id}")
    public ResponseEntity<BusItineraryDTO> patchBusItinerary(@PathVariable(name="id") Integer id, @RequestBody BusItineraryDTO busItineraryDTO) {
        
        BusItineraryDTO patched = busItineraryService.patchBusItinerary(id, busItineraryDTO);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping(path= "/busItineraries/{id}")
    public void deleteBusItinerary(@PathVariable(name= "id") Integer id) {
        busItineraryService.deleteBusItinerary(id);
    }
}
