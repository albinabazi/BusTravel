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
@RequestMapping("/grupi")
public class GroupController {
    
    @Autowired
    private GroupService grupiService;

    @GetMapping
    public Page<Group> findAll(Pageable pageable){
        return grupiService.findAll(pageable);
    }

    @GetMapping("/grupi/{id}")
    public Group getFestivaliById(@PathVariable("id") Integer id){
        return grupiService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Group createFestivali(@RequestBody Group festivali) {
        
        return grupiService.save(festivali);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Group> updateFestivali(@PathVariable("id") Integer id, @RequestBody Group festivali) {
        
        if(id== null || festivali== null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(grupiService.updateFestivali(id, festivali));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFestival(@PathVariable(name="id") Integer id){
        grupiService.delete(id);
    }
}
