package com.example.demo.Controller;


import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.User;
import com.example.demo.Entity.Userorg;
import com.example.demo.Service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class SignupController {

    @Autowired
    private UserService userService; // Assume you have a UserService to handle user logic

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        try {
            userService.saveUser(user); // Save the user details
            return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("User registration failed!", HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/userpart/{email}")
    public ResponseEntity<User> getUser(@PathVariable String email) {
        User user = userService.getUserByEmail(email);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
