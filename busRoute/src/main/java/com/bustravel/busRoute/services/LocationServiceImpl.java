package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.busRoute.DTOs.LocationDTO;
import com.bustravel.busRoute.entities.Location;
import com.bustravel.busRoute.mappers.LocationMapper;
import com.bustravel.busRoute.respositories.LocationRepository;

import jakarta.transaction.Transactional;

@Service
public class LocationServiceImpl implements LocationService {
    
    private LocationRepository locationRepository;

    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    @Transactional
    public Page<Location> findAll(Pageable pageable) {
        return locationRepository.findAll(pageable);
        
    }

    @Override
    public Location findLocationById(Integer id) {
        Location location = locationRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Location with id "+ id + " is not found"));

        return location;
    }

    @Override
    public Location saveLocation(Location location) {
        return locationRepository.save(location);
    }

    @Override
    public Location updateLocation(Integer id, Location location) {
        
        locationRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Location with id "+ id + " is not found"));

        location.setId(id);
        
        return locationRepository.save(location);
    }

    @Override
    public LocationDTO patchLocation(Integer id, LocationDTO locationDTO) {
        
        Location location = findLocationById(id);

        LocationMapper.mapDtoToEntity(locationDTO, location);

        Location patched = locationRepository.save(location);

        return LocationMapper.mapEntityToDto(patched);
    }

    @Override
    public void deleteLocation(Integer id) {
        locationRepository.deleteById(id);
    }
}