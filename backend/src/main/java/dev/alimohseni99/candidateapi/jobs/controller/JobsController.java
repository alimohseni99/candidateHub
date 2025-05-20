package dev.alimohseni99.candidateapi.jobs.controller;


import dev.alimohseni99.candidateapi.applicants.dto.ApplicantCreateDto;
import dev.alimohseni99.candidateapi.jobs.Jobs;
import dev.alimohseni99.candidateapi.jobs.dto.JobsDto;
import dev.alimohseni99.candidateapi.jobs.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin
public class JobsController {

    private final JobsService service;

    @Autowired
    public JobsController(JobsService service) {
        this.service = service;
    }

    @GetMapping
    public List<Jobs> JobsList(){
        return service.getJobsList();
    }

    @PostMapping
    public void createNewJob(@RequestBody JobsDto dto){
        service.createJob(dto);
    }

    @DeleteMapping
    public void deleteJob(@RequestBody UUID id){
        service.deleteJob(id);
    }

}
