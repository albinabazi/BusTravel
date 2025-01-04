package com.bustravel.busRoute.mappers;

import com.bustravel.busRoute.DTOs.BusLineDTO;
import com.bustravel.busRoute.entities.BusLine;

public class BusLineMapper {
    
    public static void mapDtoToEntity(BusLineDTO busLineDTO, BusLine busLine) {
        

        if (busLineDTO.getDepartureCity() != null) {
            busLine.setDepartureCity(busLineDTO.getDepartureCity());
        }

        if (busLineDTO.getArrivalCity() != null) {
            busLine.setArrivalCity(busLineDTO.getArrivalCity());
        }

        if (busLineDTO.getCompany() != null) {
            busLine.setCompany(busLineDTO.getCompany());
        }

        if (busLineDTO.getNumberOfSeats() != 0) {
            busLine.setNumberOfSeats(busLineDTO.getNumberOfSeats());
        }

        if (busLineDTO.getPrice() != 0) {
            busLine.setPrice(busLineDTO.getPrice());
        }
    }

    public static BusLineDTO mapEntityToDto(BusLine busLine) {
        BusLineDTO busLineDTO = new BusLineDTO();

        busLineDTO.setId(busLine.getId());
        busLineDTO.setDepartureCity(busLine.getDepartureCity());
        busLineDTO.setArrivalCity(busLine.getArrivalCity());
        busLineDTO.setCompany(busLine.getCompany());
        busLineDTO.setNumberOfSeats(busLine.getNumberOfSeats());
        busLineDTO.setPrice(busLine.getPrice());

        return busLineDTO;
    }
}