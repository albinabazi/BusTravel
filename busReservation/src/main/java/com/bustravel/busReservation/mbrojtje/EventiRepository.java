package com.bustravel.busReservation.mbrojtje;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EventiRepository extends JpaRepository<Eventi, Integer> {
    @Query("SELECT e FROM Eventi e WHERE e.festivali.id = :festivalId")
    List<Eventi> findEventsByFestival(@Param("festivalId") Integer festivalId);
}