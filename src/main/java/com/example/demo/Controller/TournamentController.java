package com.example.demo.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.Tournament;
import com.example.demo.Repository.TournamentRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/tournaments")
public class TournamentController {

    @Autowired
    private TournamentRepository tournamentRepository;

    @PostMapping("/create")
    public String createTournament(@RequestParam("name") String name,
                                   @RequestParam("sport") String sport,
                                   @RequestParam("organizer") String organizer,
                                   @RequestParam("location") String location,
                                   @RequestParam("dates") String dates,
                                   @RequestParam("registrationFee") String registrationFee,
                                   @RequestParam("prizeMoney") String prizeMoney,
                                   @RequestParam("rules") String rules,
                                   @RequestParam("eligibility") String eligibility,
                                   @RequestParam("gender") String gender,
                                   @RequestParam("teamSize") Integer teamSize,
                                   @RequestParam("image") MultipartFile image,
                                   @RequestParam("org_id") Long org_id) {
        System.out.println("Received org_id: " + org_id);
        System.out.println("Received image: " + (image != null ? image.getOriginalFilename() : "None"));

        Tournament tournament = new Tournament();
        tournament.setName(name);
        tournament.setSport(sport);
        tournament.setOrganizer(organizer);
        tournament.setLocation(location);
        tournament.setDates(dates);
        tournament.setRegistrationFee(registrationFee);
        tournament.setPrizeMoney(prizeMoney);
        tournament.setRules(rules);
        tournament.setEligibility(eligibility);
        tournament.setGender(gender);
        tournament.setTeamSize(teamSize);
        tournament.setOrgId(org_id); // Set org_id

        try {
            tournament.setImage(image.getBytes());
        } catch (Exception e) {
            return "Error uploading image: " + e.getMessage();
        }

        tournamentRepository.save(tournament);
        return "Tournament created successfully!";
    }
    @GetMapping("/byOrganizer/{org_id}")
    public List<Tournament> getTournamentsByOrganizer(@PathVariable Long org_id) {
        return tournamentRepository.findByOrgId(org_id);
    }
    
    @GetMapping("/all")
    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }
    
    @GetMapping("/{tour_id}")
    public Tournament getTournamentById(@PathVariable Long tour_id) {
        return tournamentRepository.findById(tour_id)
            .orElseThrow(() -> new RuntimeException("Tournament not found"));
    }


}
