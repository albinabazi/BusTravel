package com.bustravel.busRoute.entities;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="busline")
public class BusLine {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "departure_city_id")
    @JsonIgnoreProperties({"latitude", "longitude"})
    private Location departureCity;

    @ManyToOne
    @JoinColumn(name = "arrival_city_id")
    @JsonIgnoreProperties({"latitude", "longitude"})
    private Location arrivalCity;

    @ManyToOne
    @JoinColumn(name = "company_id")
    @JsonIgnoreProperties({"numberOfBuses", "phoneNumber", "email"})
    private Company company;

    @Column(name = "number_of_seats")
    private int numberOfSeats;
    
    private Double price;

    @OneToMany(mappedBy = "busLine", cascade = CascadeType.ALL, orphanRemoval = true, fetch = jakarta.persistence.FetchType.EAGER)
    @JsonManagedReference
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
