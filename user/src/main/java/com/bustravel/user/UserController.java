package com.bustravel.user;


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



@RestController
public class UserController {

    private UserService userService;

    public UserController(final UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path="/users/{id}")
    public UserEntity getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }
    
   /*  @GetMapping(path ="/users", params = "userName")
    public Set<UserEntity> findByNameOrEmail(@RequestParam(name = "userName") String userName, @RequestParam(name="email", required= false) String email){
        return userService.findByNameOrEmail(userName, email);
    } */

    @GetMapping(path ="/users")
    public Page<UserEntity> findAll(Pageable pageable){
        return userService.findAll(pageable);
    }

    @PostMapping(path="/users")
    @ResponseStatus(HttpStatus.CREATED)
    public UserEntity createUser(@RequestBody UserEntity userEntity) {
        return userService.save(userEntity);
    }

    @DeleteMapping(path="/users/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUsers(@PathVariable(name="id") Long id){
        userService.delete(id);
    }

    @PutMapping(path="/users/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable(name="id") Long id, @RequestBody UserEntity userEntity) {
        
        if(id== null || userEntity== null){
            //throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(userService.updateUser(id, userEntity));
    }

    @PatchMapping(path="/users/{id}")
    public ResponseEntity<UserDto> patchUser(@PathVariable(name="id") Long id, @RequestBody UserDto userDto){

        UserDto patched= userService.patchUser(id, userDto);

        
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDto userDTO) {
        String result = userService.registerUser(userDTO);
        return ResponseEntity.ok(result);
    }
}