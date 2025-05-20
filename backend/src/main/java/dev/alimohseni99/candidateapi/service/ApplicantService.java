package dev.alimohseni99.candidateapi.service;


import dev.alimohseni99.candidateapi.applicants.Applicant;
import dev.alimohseni99.candidateapi.dto.ApplicantCreateDto;
import dev.alimohseni99.candidateapi.exceptions.NotFound;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.View;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ApplicantService {

    private final List<Applicant> applicantList;
    private final View error;

    public ApplicantService(View error) {
        this.applicantList = new ArrayList<>();
        this.error = error;
    }

    public List<Applicant> getApplicantList() {
        return applicantList;
    }

    public void createApplicant(ApplicantCreateDto dto){
        applicantList.add(ApplicantCreateDto.fromDto(dto));
    }

    public void deleteApplicant(UUID id){
        Optional<Applicant> applicant = applicantList.stream().filter(T -> T.getId().equals(id)).findFirst();

        if (applicant.isEmpty()){
            throw new NotFound("Could not find the user with ID: " + id.toString());
        }
        applicantList.remove(applicant.get());
    }

}
