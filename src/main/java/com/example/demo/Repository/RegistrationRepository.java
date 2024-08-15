package com.example.demo.Repository;

import com.example.demo.Entity.Registration;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    Registration findByPartEmail(String partEmail);
    
    List<Registration> findAllByPartId(Long partId); // Add this method
}
