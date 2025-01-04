package com.bustravel.busRoute.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.bustravel.busRoute.DTOs.CompanyDTO;
import com.bustravel.busRoute.entities.Company;
import com.bustravel.busRoute.mappers.CompanyMapper;
import com.bustravel.busRoute.respositories.CompanyRepository;

import jakarta.transaction.Transactional;

@Service
public class CompanyServiceImpl implements CompanyService {
    
    private CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    @Transactional
    public Page<Company> findAll(Pageable pageable) {
        return companyRepository.findAll(pageable);
    }

    @Override
    public Company findCompanyById(Integer id) {
        Company company= companyRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Company with id "+ id + " is not found"));
        
        return company;
    }

    @Override
    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public Company updateCompany(Integer id, Company company) {
        
        companyRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Company with id "+ id + " is not found"));

        company.setId(id);
        
        return companyRepository.save(company);
    }

    @Override
    public CompanyDTO patchCompany (Integer id, CompanyDTO companyDTO) {
        
        Company company = findCompanyById(id);
        
        CompanyMapper.mapDtoToEntity(companyDTO, company);

        Company patched = companyRepository.save(company);

        return CompanyMapper.mapEntityToDto(patched);
    }

    @Override
    public void deleteCompany(Integer id) {
        companyRepository.deleteById(id);
    }
}