package com.bustravel.busRoute.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bustravel.busRoute.entities.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {
    
}