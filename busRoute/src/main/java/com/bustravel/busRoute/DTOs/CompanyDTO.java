package com.bustravel.busRoute.DTOs;

import java.util.HashSet;
import java.util.Set;

public class CompanyDTO {
    private Integer id;
    private String name;
    private Integer numberOfBuses;
    private String phoneNumber;
    private String email;

    private Set<BusLineDTO> busLines = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getNumberOfBuses() {
        return numberOfBuses;
    }

    public void setNumberOfBuses(Integer numberOfBuses) {
        this.numberOfBuses = numberOfBuses;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<BusLineDTO> getBusLines() {
        return busLines;
    }

    public void setBusLines(Set<BusLineDTO> busLines) {
        this.busLines = busLines;
    }
}