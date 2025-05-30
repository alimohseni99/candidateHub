package dev.alimohseni99.candidateapi.jobs.service;


import dev.alimohseni99.candidateapi.exceptions.NotFound;
import dev.alimohseni99.candidateapi.jobs.Jobs;
import dev.alimohseni99.candidateapi.jobs.Status;
import dev.alimohseni99.candidateapi.jobs.dto.JobsDto;
import dev.alimohseni99.candidateapi.jobs.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class JobsService {

    private final JobsRepository repository;

    @Autowired
    public JobsService(JobsRepository repository) {
        this.repository = repository;
    }


    public List<Jobs> getJobsList(){
        return repository.findAll();
    }

    public List<Status> getAllJobsStatus() {
        return Arrays.asList(Status.values());
    }

    public List<Jobs> getJobListById(UUID id){
            return repository.findAllByApplicantId(id);
    }

    public void updateJobStatus(UUID id, Status newStatus) {
        Optional<Jobs> job = repository.findById(id);
        if (job.isPresent()) {
            Jobs jobs = job.get();
            jobs.setStatus(newStatus);
            repository.save(jobs);
        }
        else {
            throw new NotFound("Job not found");
        }
    }

    public void createJob(JobsDto dto){
       repository.save(JobsDto.newJob(dto));
    }

    public void deleteJob(UUID id){
        Optional<Jobs> job = repository.findById(id);
        if (job.isEmpty()){
            throw new NotFound("Could not find the job with ID: " + id);
        }

        repository.delete(job.get());
    }
}
