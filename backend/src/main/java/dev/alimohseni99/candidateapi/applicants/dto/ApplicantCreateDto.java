package dev.alimohseni99.candidateapi.applicants.dto;


import dev.alimohseni99.candidateapi.applicants.Applicant;

public record ApplicantCreateDto(String name, String mail, String clerkId) {
    public static Applicant fromDto(ApplicantCreateDto dto){
        return new Applicant(dto.name, dto.mail, dto.clerkId);
    }
}
