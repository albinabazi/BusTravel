package com.bustravel.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bustravel.user.token.JwtService;
import com.bustravel.user.token.LoginForm;

import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UserController {

    private UserService userService;
    private AuthenticationManager authenticationManager;
    private JwtService jwtService;
    private MyUserDetailsService myUserDetailsService;

    public UserController(final UserService userService, AuthenticationManager authenticationManager, JwtService jwtService, MyUserDetailsService myUserDetailsService) {
        this.userService = userService;
        this.authenticationManager=authenticationManager;
        this.jwtService=jwtService;
        this.myUserDetailsService=myUserDetailsService;
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

    @GetMapping("/home")
    public String handleWelcome() {
        return "Welcome";
    }

    @GetMapping("/admin/home")
    public String handleAdminWelcome() {
        return "Welcome Admin";
    }
    

    @GetMapping("/user/home")
    public String handleUserWelcome() {
        return "Welcome User";
    }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody LoginForm loginForm)  {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
            (loginForm.email(), loginForm.password()));

        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(myUserDetailsService.loadUserByUsername(loginForm.email()));
        } else {
            throw new UsernameNotFoundException("Invalid credentials");
        }
    }
    
}