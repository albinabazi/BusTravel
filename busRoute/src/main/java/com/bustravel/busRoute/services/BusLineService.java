package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bustravel.busRoute.DTOs.BusLineDTO;
import com.bustravel.busRoute.entities.BusLine;

public interface BusLineService {
    BusLine findBusLineById(Integer id);
    Page<BusLine> findAll(Pageable pageable);
    BusLine saveBusLine(BusLine busLine);
    BusLine updateBusLine(Integer id, BusLine busLine);
    BusLineDTO patchBusLine(Integer id, BusLineDTO busLineDTO);
    void deleteBusLine(Integer id);
}