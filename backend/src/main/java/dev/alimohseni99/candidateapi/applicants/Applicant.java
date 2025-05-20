package dev.alimohseni99.candidateapi.applicants;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.UUID;



@Entity
public class Applicant {
    private String name;
    private String mail;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String clerkId;

    public Applicant(String name, String mail, String clerkId) {
        this.name = name;
        this.mail = mail;
        this.clerkId = clerkId;
    }

    public Applicant() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getClerkId() {
        return clerkId;
    }

    public void setClerkId(String clerkId) {
        this.clerkId = clerkId;
    }
}
