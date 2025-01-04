package com.bustravel.busRoute.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bustravel.busRoute.entities.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

}
