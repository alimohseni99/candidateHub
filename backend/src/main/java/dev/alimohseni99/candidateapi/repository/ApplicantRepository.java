package dev.alimohseni99.candidateapi.repository;


import dev.alimohseni99.candidateapi.applicants.Applicant;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ApplicantRepository extends ListCrudRepository<Applicant, UUID> {
}
