package dev.alimohseni99.candidateapi.applicants.service;


import dev.alimohseni99.candidateapi.applicants.Applicant;
import dev.alimohseni99.candidateapi.applicants.dto.ApplicantCreateDto;
import dev.alimohseni99.candidateapi.exceptions.NotFound;
import dev.alimohseni99.candidateapi.applicants.repository.ApplicantRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.View;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ApplicantService {

    private final ApplicantRepository repository;
    private final View error;

    public ApplicantService(View error, ApplicantRepository repository) {
        this.repository = repository;
        this.error = error;
    }

    public List<Applicant> getApplicantList() {
        return repository.findAll();
    }

    public Applicant getApplicantById(ApplicantCreateDto dto){
        Optional<Applicant> applicant = repository.getApplicantsByClerkId(dto.clerkId());
        return applicant.orElseGet(() -> createApplicant(dto));
    }

    public Applicant createApplicant(ApplicantCreateDto dto){
        return repository.save(ApplicantCreateDto.fromDto(dto));
    }

    public void deleteApplicant(UUID id){
        Optional<Applicant> applicant = repository.findById(id);

        if (applicant.isEmpty()){
            throw new NotFound("Could not find the user with ID: " + id.toString());
        }
        repository.delete(applicant.get());
    }

}
