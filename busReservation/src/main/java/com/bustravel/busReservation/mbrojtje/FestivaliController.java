package com.bustravel.busReservation.mbrojtje;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/festivale")
public class FestivaliController {

    @Autowired
    private FestivaliService festivaliService;

    @GetMapping
    public Page<Festivali> findAll(Pageable pageable){
        return festivaliService.findAll(pageable);
    }

    @GetMapping("/festivali/{id}")
    public Festivali getFestivaliById(@PathVariable("id") Integer id){
        return festivaliService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Festivali createFestivali(@RequestBody Festivali festivali) {
        
        return festivaliService.save(festivali);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Festivali> updateFestivali(@PathVariable("id") Integer id, @RequestBody Festivali festivali) {
        
        if(id== null || festivali== null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(festivaliService.updateFestivali(id, festivali));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFestival(@PathVariable(name="id") Integer id){
        festivaliService.delete(id);
    }
}