package com.example.demo.Controller;

import com.example.demo.Entity.Registration;
import com.example.demo.Service.RegistrationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/registration")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/save")
    public String saveRegistration(
        @RequestParam("part_id") Long partId,
        @RequestParam("tour_id") Long tourId,
        @RequestParam("org_id") Long orgId,
        @RequestParam("part_name") String partName,
        @RequestParam("part_email") String partEmail,
        @RequestParam("id-proof") MultipartFile idProof
    ) {
        if (partId == null || tourId == null || orgId == null) {
            return "Invalid parameters!";
        }

        Registration registration = new Registration();
        registration.setPartId(partId);
        registration.setTourId(tourId);
        registration.setOrgId(orgId);
        registration.setPartName(partName);
        registration.setPartEmail(partEmail);

        try {
            registration.setPartIdPhoto(idProof.getBytes());
        } catch (Exception e) {
            return "Error uploading ID proof: " + e.getMessage();
        }

        registrationService.saveRegistration(registration);
        return "Registration successful!";
    }
    
    @GetMapping("/toursByPartId/{partId}")
    public List<Long> getToursByPartId(@PathVariable Long partId) {
        return registrationService.getTourIdsByPartId(partId);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRegistration(@PathVariable Long id) {
        try {
            registrationService.deleteRegistration(id);
            return "Registration deleted successfully!";
        } catch (Exception e) {
            return "Error deleting registration: " + e.getMessage();
        }
    }
    @GetMapping("/regIdAndTourIdPairsByPartId/{partId}")
    public List<List<Long>> getRegIdAndTourIdPairsByPartId(@PathVariable Long partId) {
        return registrationService.getRegIdAndTourIdPairsByPartId(partId);
    }
}
