package com.bustravel.payment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bustravel.payment.entities.Chef;

@Repository
public interface ChefRepository extends JpaRepository<Chef, Integer>{
    
}
