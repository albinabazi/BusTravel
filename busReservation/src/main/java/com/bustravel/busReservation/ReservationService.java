package com.bustravel.busReservation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReservationService {
    Page<Reservation> findAll(Pageable pageable);
    Reservation findById(Integer id);
    Reservation save(Reservation reservation);
    Reservation updateReservation(Integer id, Reservation reservation);
    ReservationDTO patchReservation(Integer id, ReservationDTO reservationDTO);
    void delete(Integer id);
}
