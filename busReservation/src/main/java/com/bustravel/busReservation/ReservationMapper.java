package com.bustravel.busReservation;

public class ReservationMapper {
    
    public static void mapDtoToEntity(ReservationDTO dto, Reservation entity){

        if(dto.getUserEmail() != null){
            entity.setUserEmail(dto.getUserEmail());
        }

        if(dto.getUsername() != null){
            entity.setUserName(dto.getUsername());
        }

        if(dto.getBusRouteId() != null){
            entity.setBusRouteId(dto.getBusRouteId());
        }

        if(dto.getDate() != null){
            entity.setDate(dto.getDate());
        }
    }

    public static ReservationDTO mapEntityToDto(Reservation entity){
        ReservationDTO dto = new ReservationDTO();

        dto.setId(entity.getId());
        dto.setUserEmail(entity.getUserEmail());
        dto.setUsername(entity.getUserName());
        dto.setBusRouteId(entity.getBusRouteId());
        dto.setDate(entity.getDate());

        return dto;
    }
}