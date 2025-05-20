package dev.alimohseni99.candidateapi.jobs.repository;


import dev.alimohseni99.candidateapi.jobs.Jobs;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface JobsRepository extends ListCrudRepository<Jobs, UUID> {
}
