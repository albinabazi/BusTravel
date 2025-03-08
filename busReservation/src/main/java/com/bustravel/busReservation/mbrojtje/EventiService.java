package com.bustravel.busReservation.mbrojtje;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EventiService {
    Page<Eventi> findAll(Pageable pageable);
    Eventi createEventi(EventiDTO eventiDTO);
    List<Eventi> getEventsByFestival(Integer festivaliId);
}