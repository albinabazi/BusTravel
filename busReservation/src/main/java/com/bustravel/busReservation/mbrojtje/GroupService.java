package com.bustravel.busReservation.mbrojtje;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface GroupService {

    Page<Group> findAll(Pageable pageable);
    Group findById(Integer id);
    Group save(Group festivali);
    Group updateFestivali(Integer id, Group festivali);
    void delete(Integer id);
} 