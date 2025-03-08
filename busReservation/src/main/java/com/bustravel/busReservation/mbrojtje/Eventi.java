package com.bustravel.busReservation.mbrojtje;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "eventi")
public class Eventi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String emri;

    @Column(columnDefinition = "TIME")
    private String orari;

    @ManyToOne
    @JoinColumn(name = "festivali_id")
   // @JsonIgnoreProperties("evente")
   //@JsonIgnore
    private Festivali festivali;

    // Getters and Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getEmri() { return emri; }
    public void setEmri(String emri) { this.emri = emri; }

    public String getOrari() { return orari; }
    public void setOrari(String orari) { this.orari = orari; }

    public Festivali getFestivali() { return festivali; }
    public void setFestivali(Festivali festivali) { this.festivali = festivali; }
}