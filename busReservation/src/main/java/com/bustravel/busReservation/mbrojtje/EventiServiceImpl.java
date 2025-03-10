package com.bustravel.busReservation.mbrojtje;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EventiServiceImpl implements EventiService{

    @Autowired
    private EventiRepository eventiRepository;

    @Autowired
    private FestivaliRepository festivaliRepository;

    @Override
    public Page<Eventi> findAll(Pageable pageable){
        return eventiRepository.findAll(pageable);
    }

    @Override
    public Eventi createEventi(EventiDTO eventiDTO) {
        // Find the associated festival by ID
        Festivali festivali = festivaliRepository.findById(eventiDTO.getFestivalId())
                .orElseThrow(() -> new RuntimeException("Festival not found"));
        
        // Create the new Eventi entity
        Eventi eventi = new Eventi();
        eventi.setEmri(eventiDTO.getEmri());
        eventi.setOrari(eventiDTO.getOrari());
        eventi.setFestivali(festivali); // Set the festival
        
        // Save the event
        return eventiRepository.save(eventi);
    }

    @Override
    public List<Eventi> getEventsByFestival(Integer festivalId) {
        return eventiRepository.findEventsByFestival(festivalId);
    }   
}