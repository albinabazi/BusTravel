package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bustravel.busRoute.DTOs.BusItineraryDTO;
import com.bustravel.busRoute.entities.BusItinerary;

public interface BusItineraryService {
    BusItinerary findBusItineraryById(Integer id);
    Page<BusItinerary> findAll(Pageable pageable);
    BusItinerary saveBusItinerary(BusItinerary busItinerary);
    BusItinerary updateBusItinerary(Integer id, BusItinerary busItinerary);
    BusItineraryDTO patchBusItinerary(Integer id, BusItineraryDTO busItineraryDTO);
    void deleteBusItinerary(Integer id);
}
