package dev.alimohseni99.candidateapi.jobs;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Jobs {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    private Status status;
    private String url;
    private UUID applicantId;

    public Jobs( String title, Status status, String url, UUID applicantId) {
        this.title = title;
        this.status = status;
        this.url = url;
        this.applicantId = applicantId;
    }

    public Jobs() {
    }


    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public UUID getApplicantId() {
        return applicantId;
    }

    public void setApplicantId(UUID applicantId) {
        this.applicantId = applicantId;
    }
}
