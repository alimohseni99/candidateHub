package dev.alimohseni99.candidateapi.applicants.controller;


import dev.alimohseni99.candidateapi.applicants.Applicant;
import dev.alimohseni99.candidateapi.applicants.dto.ApplicantCreateDto;
import dev.alimohseni99.candidateapi.applicants.service.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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

    @GetMapping("/user")
    public Applicant getApplicantByClerkId(@RequestBody  ApplicantCreateDto dto){
        return service.getApplicantByClerkId(dto);
    }

    @PostMapping
    public void newApplicant(@RequestBody ApplicantCreateDto dto){
        service.createApplicant(dto);
    }

    @DeleteMapping
    public void deleteApplicant(@RequestBody UUID id){
        service.deleteApplicant(id);
    }

}
