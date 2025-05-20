package dev.alimohseni99.candidateapi.applicants;

import java.util.UUID;

public class Applicant {
    private String name;
    private String mail;
    private UUID id;
    private String clerkId;

    public Applicant(String name, String mail, String clerkId) {
        this.name = name;
        this.mail = mail;
        this.id = UUID.randomUUID();
        this.clerkId = clerkId;
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
