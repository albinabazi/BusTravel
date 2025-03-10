package com.bustravel.busReservation.mbrojtje;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

public interface EventiService {
    Page<Eventi> findAll(Pageable pageable);
    Eventi createEventi(EventiDTO eventiDTO);
    @Query("SELECT e FROM Eventi e WHERE e.festivali.id = :festivalId")
    List<Eventi> getEventsByFestival(Integer festivalId);
}