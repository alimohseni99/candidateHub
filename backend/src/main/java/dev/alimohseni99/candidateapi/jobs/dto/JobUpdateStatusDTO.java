package dev.alimohseni99.candidateapi.jobs.dto;

import dev.alimohseni99.candidateapi.jobs.Status;

import java.util.UUID;

public record JobUpdateStatusDTO(UUID id, Status status) {
}
