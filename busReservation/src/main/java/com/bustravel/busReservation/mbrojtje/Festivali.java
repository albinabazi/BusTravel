package com.bustravel.busReservation.mbrojtje;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "festivali")
public class Festivali {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String emri;
    private String lloji;

    @OneToMany(mappedBy = "festivali", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
   // @JsonIgnoreProperties("festivali")
   @JsonBackReference
    private Set<Eventi> evente;

    // Getters and Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getEmri() { return emri; }
    public void setEmri(String emri) { this.emri = emri; }

    public String getLloji() { return lloji; }
    public void setLloji(String lloji) { this.lloji = lloji; }

    public Set<Eventi> getEvente() { return evente; }
    public void setEvente(Set<Eventi> evente) { this.evente = evente; }
}