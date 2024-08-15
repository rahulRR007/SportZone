package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tour_id;

    private String name;
    private String sport;
    private String organizer; // Organizer Name field
    private String location;
    private String dates;
    private String registrationFee;
    private String prizeMoney;
    private String rules;
    private String eligibility;
    private String gender; // Gender field
    private Integer teamSize; // Team Size field

    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;

    // Adding org_id as a simple field
    @Column(name = "org_id", nullable = false)
    private Long orgId;

    // Getters and setters

    public Long getTour_id() {
        return tour_id;
    }

    public void setTour_id(Long tour_id) {
        this.tour_id = tour_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSport() {
        return sport;
    }

    public void setSport(String sport) {
        this.sport = sport;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDates() {
        return dates;
    }

    public void setDates(String dates) {
        this.dates = dates;
    }

    public String getRegistrationFee() {
        return registrationFee;
    }

    public void setRegistrationFee(String registrationFee) {
        this.registrationFee = registrationFee;
    }

    public String getPrizeMoney() {
        return prizeMoney;
    }

    public void setPrizeMoney(String prizeMoney) {
        this.prizeMoney = prizeMoney;
    }

    public String getRules() {
        return rules;
    }

    public void setRules(String rules) {
        this.rules = rules;
    }

    public String getEligibility() {
        return eligibility;
    }

    public void setEligibility(String eligibility) {
        this.eligibility = eligibility;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getTeamSize() {
        return teamSize;
    }

    public void setTeamSize(Integer teamSize) {
        this.teamSize = teamSize;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Long getOrgId() {
        return orgId;
    }

    public void setOrgId(Long orgId) {
        this.orgId = orgId;
    }

    @Override
    public String toString() {
        return "Tournament{" +
                "tour_id=" + tour_id +
                ", name='" + name + '\'' +
                ", sport='" + sport + '\'' +
                ", organizer='" + organizer + '\'' +
                ", location='" + location + '\'' +
                ", dates='" + dates + '\'' +
                ", registrationFee='" + registrationFee + '\'' +
                ", prizeMoney='" + prizeMoney + '\'' +
                ", rules='" + rules + '\'' +
                ", eligibility='" + eligibility + '\'' +
                ", gender='" + gender + '\'' +
                ", teamSize=" + teamSize +
                ", orgId=" + orgId +
                '}';
    }
}
