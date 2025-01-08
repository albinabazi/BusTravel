package com.bustravel.busReservation;

import jakarta.persistence.Column;

public class ReservationDTO {
    
    private Integer id;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "username")
    private String userName;

    @Column(name = "bus_route_id")
    private Integer busRouteId;

    @Column(name = "date")
    private String date;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUsername() {
        return userName;
    }

    public void setUsername(String username) {
        this.userName = username;
    }

    public Integer getBusRouteId() {
        return busRouteId;
    }

    public void setBusRouteId(Integer busRouteId) {
        this.busRouteId = busRouteId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }
}