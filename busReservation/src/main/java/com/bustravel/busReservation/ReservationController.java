package com.bustravel.busReservation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class ReservationController {
    
    private ReservationService reservationService;

    public ReservationController(ReservationService reservationService){
        this.reservationService = reservationService;
    }

    @GetMapping(path="/reservations")
    public Page<Reservation> findAll(Pageable pageable){
        return reservationService.findAll(pageable);
    }

    @GetMapping(path= "/reservations/{id}")
    public Reservation getReservationById(@PathVariable("id") Integer id){
        return reservationService.findById(id);
    }
    
    @PostMapping("/reservations")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation createReservation(@RequestBody Reservation reservation) {
        
        return reservationService.save(reservation);
    }
    
    @PutMapping("/reservations/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable("id") Integer id, @RequestBody Reservation reservation) {
        
        if(id== null || reservation== null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(reservationService.updateReservation(id, reservation));
    }

    @PatchMapping(path="/reservations/{id}")
    public ResponseEntity<ReservationDTO> patchUser(@PathVariable(name="id") Integer id, @RequestBody ReservationDTO reservationDTO){

        ReservationDTO patched= reservationService.patchReservation(id, reservationDTO);

        
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping(path="/reservations/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteReservation(@PathVariable(name="id") Integer id){
        reservationService.delete(id);
    }
}