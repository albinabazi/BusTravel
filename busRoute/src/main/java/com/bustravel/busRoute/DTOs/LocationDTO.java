package com.bustravel.busRoute.DTOs;

import java.util.HashSet;
import java.util.Set;

import com.bustravel.busRoute.entities.BusLine;

public class LocationDTO {
    private Integer id;
    private String locationName;
    private Double latitude;
    private Double longitude;

    private Set<BusLine> busLines = new HashSet<>();
    private Set<BusLine> busLine = new HashSet<>();

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
