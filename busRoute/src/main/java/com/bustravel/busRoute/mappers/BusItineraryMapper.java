package com.bustravel.busRoute.mappers;

import com.bustravel.busRoute.DTOs.BusItineraryDTO;
import com.bustravel.busRoute.entities.BusItinerary;

public class BusItineraryMapper {
    
    public static void mapDtoToEntity(BusItineraryDTO busItineraryDTO, BusItinerary busItinerary) {
        
        if (busItineraryDTO.getDepartureTime() != null) {
            busItinerary.setDepartureTime(busItineraryDTO.getDepartureTime());
        }

        if (busItineraryDTO.getArrivalTime() != null) {
            busItinerary.setArrivalTime(busItineraryDTO.getArrivalTime());
        }

        if (busItineraryDTO.getDuration() != null) {
            busItinerary.setDuration(busItineraryDTO.getDuration());
        }

        if (busItineraryDTO.getBusLine() != null) {
            busItinerary.setBusLine(busItineraryDTO.getBusLine());
        }
    }

    public static BusItineraryDTO mapEntityToDto(BusItinerary busItinerary) {
        BusItineraryDTO busItineraryDTO = new BusItineraryDTO();

        busItineraryDTO.setId(busItinerary.getId());
        busItineraryDTO.setDepartureTime(busItinerary.getDepartureTime());
        busItineraryDTO.setArrivalTime(busItinerary.getArrivalTime());
        busItineraryDTO.setDuration(busItinerary.getDuration());
        busItineraryDTO.setBusLine(busItinerary.getBusLine());

        return busItineraryDTO;
    }
}