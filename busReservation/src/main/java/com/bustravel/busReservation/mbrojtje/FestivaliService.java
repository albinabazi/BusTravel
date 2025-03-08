package com.bustravel.busReservation.mbrojtje;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FestivaliService {
    Page<Festivali> findAll(Pageable pageable);
    Festivali findById(Integer id);
    Festivali save(Festivali festivali);
    Festivali updateFestivali(Integer id, Festivali festivali);
    void delete(Integer id);
}