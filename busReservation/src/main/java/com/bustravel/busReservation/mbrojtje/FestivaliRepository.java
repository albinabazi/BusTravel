package com.bustravel.busReservation.mbrojtje;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FestivaliRepository extends JpaRepository<Festivali, Integer> { }