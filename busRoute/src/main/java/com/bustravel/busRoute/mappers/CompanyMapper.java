package com.bustravel.busRoute.mappers;

import com.bustravel.busRoute.DTOs.CompanyDTO;
import com.bustravel.busRoute.entities.Company;

public interface CompanyMapper {

    public static void mapDtoToEntity(CompanyDTO companyDTO, Company company) {
        
        if (companyDTO.getName() != null) {
            company.setName(companyDTO.getName());
        }

        if (companyDTO.getNumberOfBuses() != null) {
            company.setNumberOfBuses(companyDTO.getNumberOfBuses());
        }

        if (companyDTO.getPhoneNumber() != null) {
            company.setPhoneNumber(companyDTO.getPhoneNumber());
        }

        if (companyDTO.getEmail() != null) {
            company.setEmail(companyDTO.getEmail());
        }
    }

    public static CompanyDTO mapEntityToDto(Company company) {
        CompanyDTO companyDTO = new CompanyDTO();

        companyDTO.setId(company.getId());
        companyDTO.setName(company.getName());
        companyDTO.setNumberOfBuses(company.getNumberOfBuses());
        companyDTO.setPhoneNumber(company.getPhoneNumber());
        companyDTO.setEmail(company.getEmail());

        return companyDTO;
    }
}