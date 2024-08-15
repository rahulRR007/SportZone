package com.example.demo.Service;

import com.example.demo.Entity.Registration;
import com.example.demo.Repository.RegistrationRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration getRegistrationByPartEmail(String email) {
        return registrationRepository.findByPartEmail(email);
    }

    public Registration saveRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    public Long getRegIdByPartEmail(String email) {
        Registration registration = registrationRepository.findByPartEmail(email);
        return registration != null ? registration.getReg_id() : null;
    }
    
    public List<Long> getTourIdsByPartId(Long partId) {
        return registrationRepository.findAllByPartId(partId).stream()
                                      .map(Registration::getTourId)
                                      .collect(Collectors.toList());
    }
    
    // New method to get a list of reg_id and tour_id pairs
    public List<List<Long>> getRegIdAndTourIdPairsByPartId(Long partId) {
        return registrationRepository.findAllByPartId(partId).stream()
                .map(registration -> List.of(registration.getReg_id(), registration.getTourId()))
                .collect(Collectors.toList());
    }
    
    public void deleteRegistration(Long regId) {
        registrationRepository.deleteById(regId);
    }
}
