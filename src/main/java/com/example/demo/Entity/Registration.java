package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "registration")
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reg_id;
    
    
	@Column(name = "part_id")
    private Long partId; // `part_id` field

    @Column(name = "org_id")
    private Long orgId; // `org_id` field

    @Column(name = "tour_id")
    private Long tourId; // `tour_id` field

    @Column(name = "part_name")
    private String partName; // `part_name` field

    @Column(name = "part_email", unique = true)
    private String partEmail; // `part_email` field

    @Lob
    @Column(name = "part_idphoto", columnDefinition = "LONGBLOB")
    private byte[] partIdPhoto; // `part_idphoto` field
    
    

    // Getters and Setters

    public Long getPartId() {
        return partId;
    }

    public void setPartId(Long partId) {
        this.partId = partId;
    }

    public Long getOrgId() {
        return orgId;
    }

    public void setOrgId(Long orgId) {
        this.orgId = orgId;
    }

    public Long getTourId() {
        return tourId;
    }

    public void setTourId(Long tourId) {
        this.tourId = tourId;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public String getPartEmail() {
        return partEmail;
    }

    public void setPartEmail(String partEmail) {
        this.partEmail = partEmail;
    }

    public byte[] getPartIdPhoto() {
        return partIdPhoto;
    }

    public void setPartIdPhoto(byte[] partIdPhoto) {
        this.partIdPhoto = partIdPhoto;
    }
    
    public Long getReg_id() {
		return reg_id;
	}

	public void setReg_id(Long reg_id) {
		this.reg_id = reg_id;
	}
}
