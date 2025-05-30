package dev.alimohseni99.candidateapi.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionsHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler({NotFound.class})
    protected ResponseEntity handleNotFound(RuntimeException exception, WebRequest request){
        return handleExceptionInternal(exception,
                exception.getMessage(),
                new HttpHeaders(),
                HttpStatus.valueOf(404),
                request);
    }
}
