package com.bustravel.busRoute.entities;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name= "location")
public class Location {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    @Column(name= "location_name", nullable = false)
    private String locationName;
    private Double latitude;
    private Double longitude;

    @OneToMany(mappedBy = "departureCity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<BusLine> busLines = new HashSet<>();

    @OneToMany(mappedBy = "arrivalCity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<BusLine> busLine = new HashSet<>();

    public Location() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Set<BusLine> getBusLines() {
        return busLines;
    }

    public void setBusLines(Set<BusLine> busLines) {
        this.busLines = busLines;
    }

    public Set<BusLine> getBusLine() {
        return busLine;
    }

    public void setBusLine(Set<BusLine> busLine) {
        this.busLine = busLine;
    }
}