package com.bustravel.busRoute.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bustravel.busRoute.entities.BusItinerary;

@Repository
public interface BusItineraryRepository extends JpaRepository<BusItinerary, Integer> {
    
}
