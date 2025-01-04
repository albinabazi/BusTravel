package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bustravel.busRoute.DTOs.CompanyDTO;
import com.bustravel.busRoute.entities.Company;

public interface CompanyService {
    Company findCompanyById(Integer id);
    Page<Company> findAll(Pageable pageable);
    Company saveCompany(Company company);
    Company updateCompany(Integer id, Company company);
    CompanyDTO patchCompany(Integer id, CompanyDTO companyDTO);
    void deleteCompany(Integer id);
}