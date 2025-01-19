package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.busRoute.DTOs.BusItineraryDTO;
import com.bustravel.busRoute.entities.BusItinerary;
import com.bustravel.busRoute.mappers.BusItineraryMapper;
import com.bustravel.busRoute.respositories.BusItineraryRepository;

@Service
public class BusItineraryImpl implements BusItineraryService{
    
    private BusItineraryRepository busItineraryRepository;

    public BusItineraryImpl(BusItineraryRepository busItineraryRepository) {
        this.busItineraryRepository = busItineraryRepository;
    }

    @Override
    public Page<BusItinerary> findAll(Pageable pageable) {
        return busItineraryRepository.findAll(pageable);
    }

    @Override
    public BusItinerary findBusItineraryById(Integer id) {
        
        BusItinerary busItinerary = busItineraryRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "BusItinerary with id "+ id + " is not found"));
        
        return busItinerary;
    }

    @Override
    public BusItinerary saveBusItinerary(BusItinerary busItinerary) {
        return busItineraryRepository.save(busItinerary);
    }

    @Override
    public BusItinerary updateBusItinerary(Integer id, BusItinerary busItinerary) {
        
        busItineraryRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "BusItinerary with id "+ id + " is not found"));
        
        busItinerary.setId(id);
        
        return busItineraryRepository.save(busItinerary);
    }

    @Override
    public BusItineraryDTO patchBusItinerary(Integer id, BusItineraryDTO busItineraryDTO) {
        
        BusItinerary busItinerary = findBusItineraryById(id);
        
        BusItineraryMapper.mapDtoToEntity(busItineraryDTO, busItinerary);

        BusItinerary patched = busItineraryRepository.save(busItinerary);

        return BusItineraryMapper.mapEntityToDto(patched);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteBusItinerary(Integer id) {
        busItineraryRepository.deleteById(id);
    }
}