package com.bustravel.busRoute.DTOs;

import java.util.HashSet;
import java.util.Set;

import com.bustravel.busRoute.entities.BusItinerary;
import com.bustravel.busRoute.entities.Company;
import com.bustravel.busRoute.entities.Location;

public class BusLineDTO {
    private Integer id;
    private Location departureCity;
    private Location arrivalCity;
    private Company company;
    private Integer numberOfSeats;
    private Double price;

    private Set<BusItinerary> busItineraries  = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Location getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(Location departureCity) {
        this.departureCity = departureCity;
    }

    public Location getArrivalCity() {
        return arrivalCity;
    }

    public void setArrivalCity(Location arrivalCity) {
        this.arrivalCity = arrivalCity;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Integer getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(Integer numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Set<BusItinerary> getBusItineraries() {
        return busItineraries;
    }

    public void setBusItineraries(Set<BusItinerary> busItineraries) {
        this.busItineraries = busItineraries;
    }
}
