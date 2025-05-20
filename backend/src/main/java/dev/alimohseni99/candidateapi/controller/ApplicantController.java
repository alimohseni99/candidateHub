package dev.alimohseni99.candidateapi.controller;


import dev.alimohseni99.candidateapi.applicants.Applicant;
import dev.alimohseni99.candidateapi.dto.ApplicantCreateDto;
import dev.alimohseni99.candidateapi.service.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applicant")
@CrossOrigin
public class ApplicantController {

    private final ApplicantService service;

    @Autowired
    public ApplicantController(ApplicantService service) {
        this.service = service;
    }

    @GetMapping
    public List<Applicant> applicantList(){
        return service.getApplicantList();
    }

    @PostMapping
    public void newApplicant(@RequestBody ApplicantCreateDto dto){
        service.createApplicant(dto);
    }

}
