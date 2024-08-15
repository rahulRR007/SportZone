package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Userorg;
import com.example.demo.Repository.UserorgRepository;

@Service
public class UserorgService {

    @Autowired
    private UserorgRepository userRepository;

    public void saveUser(Userorg user) {
        userRepository.save(user);
    }

    public boolean authenticate(String email, String password) {
        Userorg user = userRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    public Userorg getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
