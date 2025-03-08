package com.bustravel.busReservation.mbrojtje;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class EventiDTO {
    private Long id;
    private String emri;
    private String orari;
    private Integer festivalId;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEmri() {
        return emri;
    }
    public void setEmri(String emri) {
        this.emri = emri;
    }
    public String getOrari() {
        return orari;
    }
    public void setOrari(String orari) {
        this.orari = orari;
    }

    public Integer getFestivalId() {
        return festivalId;
    }
    public void setFestivalId(Integer festivalId) {
        this.festivalId = festivalId;
    }
}
