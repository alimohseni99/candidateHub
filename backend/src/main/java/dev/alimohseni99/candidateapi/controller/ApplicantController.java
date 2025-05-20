package dev.alimohseni99.candidateapi.controller;


import dev.alimohseni99.candidateapi.applicants.Applicant;
import dev.alimohseni99.candidateapi.service.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/applicant")
public class ApplicantController {

    private final ApplicantService service;

    @Autowired
    public ApplicantController(ApplicantService service) {
        this.service = service;
    }

    public List<Applicant> applicantList(){
        return service.getApplicantList();
    }

}
 