package com.example.demo.Controller;

import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Userorg;
import com.example.demo.Service.UserorgService;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class SignuporgController {

    @Autowired
    private UserorgService userService;

    @PostMapping("/orgsignup")
    public ResponseEntity<String> signup(@RequestBody Userorg user) {
        try {
            userService.saveUser(user); // Save the user details
            return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("User registration failed!", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<Userorg> getUser(@PathVariable String email) {
        Userorg user = userService.getUserByEmail(email);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
