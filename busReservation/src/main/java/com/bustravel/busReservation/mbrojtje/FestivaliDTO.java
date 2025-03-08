package com.bustravel.busReservation.mbrojtje;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class FestivaliDTO {
    private Long id;
    private String emri;
    private Set<EventiDTO> evente;
    
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
    public Set<EventiDTO> getEvente() {
        return evente;
    }
    public void setEvente(Set<EventiDTO> evente) {
        this.evente = evente;
    }
}
