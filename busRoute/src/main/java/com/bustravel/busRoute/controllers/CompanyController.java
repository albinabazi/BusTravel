package com.bustravel.busRoute.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bustravel.busRoute.DTOs.CompanyDTO;
import com.bustravel.busRoute.entities.Company;
import com.bustravel.busRoute.services.CompanyService;

@RestController
public class CompanyController {

    private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);
    private CompanyService companyService;

    public CompanyController(final CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping(path= "/companies")
    public Page<Company> findAll(Pageable pageable) {
        return companyService.findAll(pageable);
    }

    @GetMapping(path= "/companies/{id}")
    public Company getCompanyById(@PathVariable("id") Integer id) {
        return companyService.findCompanyById(id);
    }

    @PostMapping(path="/companies")
    @ResponseStatus(HttpStatus.CREATED)
    public Company createCompany(@RequestBody Company company) {
        logger.info("Creating company: {}", company);
        return companyService.saveCompany(company);
    }

    @PutMapping(path="/companies/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable(name="id") Integer id, @RequestBody Company company) {
        
        company.setId(id);
        if (company == null || id == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(companyService.updateCompany(id, company));
    }

    @PatchMapping(path="/companies/{id}")
    public ResponseEntity<CompanyDTO> patchCompany(@PathVariable(name="id") Integer id, @RequestBody CompanyDTO companyDTO) {
        
        CompanyDTO patched = companyService.patchCompany(id, companyDTO);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping(path="/companies/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCompany(@PathVariable(name="id") Integer id) {
        companyService.deleteCompany(id);
    }
}
