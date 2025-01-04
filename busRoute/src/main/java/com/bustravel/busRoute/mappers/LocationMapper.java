package com.bustravel.busRoute.mappers;

import com.bustravel.busRoute.DTOs.LocationDTO;
import com.bustravel.busRoute.entities.Location;

public class LocationMapper {

    public static void mapDtoToEntity(LocationDTO locationDTO,Location location) {
        
        if (locationDTO.getLocationName() != null) {
            location.setLocationName(locationDTO.getLocationName());
        }

        if (locationDTO.getLatitude() != null) {
            location.setLatitude(locationDTO.getLatitude());
        }

        if (locationDTO.getLongitude() != null) {
            location.setLongitude(locationDTO.getLongitude());
        }
    }

    public static LocationDTO mapEntityToDto(Location location) {
        
        LocationDTO locationDTO = new LocationDTO();

        locationDTO.setId(location.getId());
        locationDTO.setLocationName(location.getLocationName());
        locationDTO.setLatitude(location.getLatitude());
        locationDTO.setLongitude(location.getLongitude());

        return locationDTO;
    }
}