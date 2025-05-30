package dev.alimohseni99.candidateapi.jobs.dto;

import dev.alimohseni99.candidateapi.jobs.Jobs;
import dev.alimohseni99.candidateapi.jobs.Status;

import java.util.UUID;

public record JobsDto(String title, String companyName, String date, Status status, String url, UUID applicantId) {

    public static Jobs newJob(JobsDto dto){
        return new Jobs(dto.title, dto.companyName, dto.date, dto.status, dto.url, dto.applicantId);
    }

}
