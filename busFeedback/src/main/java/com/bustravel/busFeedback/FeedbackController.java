package com.bustravel.busFeedback;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FeedbackController {
    
    private FeedbackService feedbackService;

    public FeedbackController(final FeedbackService feedbackService){
        this.feedbackService = feedbackService;
    }


    @GetMapping("/feedback")
    public Page<Feedback> findAll(Pageable pageable) {
        return feedbackService.getAllFeedback(pageable);
    }

    @GetMapping("/feedback/{id}")
    public Feedback getFeedbackById(@PathVariable(name="id") String id) {
        return feedbackService.getFeedbackById(id);
    }

    @PostMapping("/feedback")
    @ResponseStatus(HttpStatus.CREATED)
    public Feedback createFeedback(@RequestBody Feedback feedback) {
        return feedbackService.createFeedback(feedback);
    }

    @PutMapping("/feedback/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable("id") String id, @RequestBody Feedback feedback) {
        feedback.setId(id);
        if (id == null || feedback == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(feedbackService.updateFeedback(id, feedback));
    }

    @PatchMapping("/feedback/{id}")
    public ResponseEntity<FeedbackDTO> patchFeedback(@PathVariable("id") String id, @RequestBody FeedbackDTO feedbackDTO) {

        FeedbackDTO patched = feedbackService.patchFeedback(id, feedbackDTO);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(patched);
    }

    @DeleteMapping("/feedback/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFeedback(@PathVariable("id") String id) {
        feedbackService.deleteFeedback(id);
    }
}
