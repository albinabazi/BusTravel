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

import com.bustravel.busRoute.DTOs.BusLineDTO;
import com.bustravel.busRoute.entities.BusLine;
import com.bustravel.busRoute.services.BusLineService;

@RestController
public class BusLinesController {

    private BusLineService busLineService;

    public BusLinesController(final BusLineService busLineService) {
        this.busLineService = busLineService;
    }

    @GetMapping(path= "/busLines")
    public Page<BusLine> findAll(Pageable pageable) {
        return busLineService.findAll(pageable);
    }

    @GetMapping(path= "/busLines/{id}")
    public ResponseEntity<BusLine> getBusLineById(@PathVariable(name= "id") Integer id) {
        
        BusLine busLine = busLineService.findBusLineById(id);
        return ResponseEntity.ok().body(busLine);
    }

    @PostMapping(path= "/busLines")
    public ResponseEntity<BusLine> createBusLine(@RequestBody BusLine busLine) {

        BusLine created = busLineService.saveBusLine(busLine);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }


    @PutMapping(path= "/busLines/{id}")
    public ResponseEntity<BusLine> updateBusLine(@PathVariable(name= "id") Integer id, @RequestBody BusLine busLine) {
        
        if(id == null || busLine== null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(busLineService.updateBusLine(id, busLine));
    }

    @PatchMapping(path= "/busLines/{id}")
    public ResponseEntity<BusLineDTO> patchBusLine(@PathVariable(name= "id") Integer id, @RequestBody BusLineDTO busLineDTO) {
        
        BusLineDTO patched = busLineService.patchBusLine(id, busLineDTO);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping(path= "/busLines/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBusLineById(@PathVariable(name= "id") Integer id) {
        busLineService.deleteBusLine(id);
    }
}
