package com.bustravel.busRoute.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bustravel.busRoute.entities.BusLine;

@Repository
public interface BusLineRepository extends JpaRepository<BusLine, Integer> {
    
}