package com.bustravel.busReservation.mbrojtje;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventiRepository extends JpaRepository<Eventi, Integer> {
    public List<Eventi> findByFestivaliId(Integer festivalId);
}