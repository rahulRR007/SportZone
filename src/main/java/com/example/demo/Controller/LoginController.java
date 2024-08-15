package com.example.demo.Controller;

import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private UserService userService; // Assume you have a UserService to handle user logic

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            boolean isAuthenticated = userService.authenticate(user.getEmail(), user.getPassword());
            if (isAuthenticated) {
                return new ResponseEntity<>("Login successful!", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid email or password!", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Login failed! Please try again.", HttpStatus.BAD_REQUEST);
        }
    }
}
