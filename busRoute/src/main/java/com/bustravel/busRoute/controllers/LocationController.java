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

import com.bustravel.busRoute.DTOs.LocationDTO;
import com.bustravel.busRoute.entities.Location;
import com.bustravel.busRoute.services.LocationService;

@RestController
public class LocationController {
    
    private LocationService locationService;

    public LocationController(final LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping(path="/locations")
    public Page<Location> findAll(Pageable pageable) {
        return locationService.findAll(pageable);
    }

    @GetMapping(path="/locations/{id}")
    public Location getLocationById(@PathVariable(name= "id") Integer id) {
        return locationService.findLocationById(id);
    }

    @PostMapping(path="/locations")
    @ResponseStatus(HttpStatus.CREATED)
    public Location createLocation(@RequestBody Location location) {
        return locationService.saveLocation(location);
    }

    @PutMapping(path="/locations/{id}")
    public ResponseEntity<Location> updateLocation(@PathVariable(name= "id") Integer id, @RequestBody Location location) {
        
        if(id == null || location== null) {
            return ResponseEntity.notFound().build();
        }
        location.setId(id);
        
        return ResponseEntity.ok(locationService.updateLocation(id, location));
    }

    @PatchMapping(path="/locations/{id}")
    public ResponseEntity<LocationDTO> patchLocation(@PathVariable(name= "id") Integer id, @RequestBody LocationDTO locationDTO) {
        
        LocationDTO patched = locationService.patchLocation(id, locationDTO);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping(path="/locations/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteLocation(@PathVariable(name= "id") Integer id) {
        locationService.deleteLocation(id);
    }
}
