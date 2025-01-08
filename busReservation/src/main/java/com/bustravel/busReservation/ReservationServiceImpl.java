package com.bustravel.busReservation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ReservationServiceImpl implements ReservationService{
    
    private ReservationRepository reservationRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public Page<Reservation> findAll(Pageable pageable){
        return reservationRepository.findAll(pageable);
    }

    @Override
    public Reservation findById(Integer id){

        Reservation reservation= reservationRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation with id "+ id + " is not found"));
        
        return reservation;
    }

    @Override
    public Reservation save (Reservation reservation){
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation updateReservation(Integer id, Reservation reservation){

        reservationRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation with id "+ id + " is not found"));
        
        reservation.setId(id);

        return reservationRepository.save(reservation);
    }

    @Override
    public ReservationDTO patchReservation(Integer id, ReservationDTO reservationDTO){

        Reservation reservation = findById(id);

        ReservationMapper.mapDtoToEntity(reservationDTO, reservation);

        Reservation patched = reservationRepository.save(reservation);

        return ReservationMapper.mapEntityToDto(patched);
    }

    @Override
    public void delete(Integer id){
        reservationRepository.deleteById(id);
    }
}