package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bustravel.busRoute.DTOs.LocationDTO;
import com.bustravel.busRoute.entities.Location;

public interface LocationService {
    Location findLocationById(Integer id);
    Page<Location> findAll(Pageable pageable);
    Location saveLocation(Location location);
    Location updateLocation(Integer id, Location location);
    LocationDTO patchLocation(Integer id, LocationDTO locationDTO);
    void deleteLocation(Integer id);
}