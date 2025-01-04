package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.busRoute.DTOs.BusLineDTO;
import com.bustravel.busRoute.entities.BusLine;
import com.bustravel.busRoute.mappers.BusLineMapper;
import com.bustravel.busRoute.respositories.BusLineRepository;

@Service
public class BusLineServiceImpl  implements BusLineService {

    private BusLineRepository busLineRepository;

    public BusLineServiceImpl(BusLineRepository busLineRepository) {
        this.busLineRepository = busLineRepository;
    }
    
    @Override
    public Page<BusLine> findAll(Pageable pageable) {
        return busLineRepository.findAll(pageable);
    }

    @Override
    public BusLine findBusLineById(Integer id) {
        
        return busLineRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "BusLine with id "+ id + " is not found"));
    
    }

    @Override
    public BusLine saveBusLine(BusLine busLine) {
        return busLineRepository.save(busLine);
    }

    @Override
    public BusLine updateBusLine(Integer id, BusLine busLine) {
        
        busLineRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "BusLine with id "+ id + " is not found"));

        busLine.setId(id);
        
        return busLineRepository.save(busLine);
    }

    @Override
    public BusLineDTO patchBusLine(Integer id, BusLineDTO busLineDTO) {
        
        BusLine busLine = findBusLineById(id);
        
        BusLineMapper.mapDtoToEntity(busLineDTO, busLine);

        BusLine patched = busLineRepository.save(busLine);

        return BusLineMapper.mapEntityToDto(patched);
    }

    @Override
    public void deleteBusLine(Integer id) {
        busLineRepository.deleteById(id);
    }
}