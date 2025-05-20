package dev.alimohseni99.candidateapi.service;


import dev.alimohseni99.candidateapi.applicants.Applicant;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApplicantService {

    private final List<Applicant> applicantList;

    public ApplicantService() {
        this.applicantList = new ArrayList<>();
    }

    public List<Applicant> getApplicantList() {
        return applicantList;
    }
}
