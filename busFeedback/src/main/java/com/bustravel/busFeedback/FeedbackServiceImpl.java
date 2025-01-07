package com.bustravel.busFeedback;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class FeedbackServiceImpl implements FeedbackService{
    
    private final FeedbackRepository feedbackRepository;

    public FeedbackServiceImpl(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @Override
    public Page<Feedback> getAllFeedback(Pageable pageable) {
        return feedbackRepository.findAll(pageable);
    }

    @Override
    public Feedback getFeedbackById(String id) {
        Feedback feedback = feedbackRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Feedback with id "+ id + " is not found"));

        return feedback;
    }

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public Feedback updateFeedback(String id, Feedback feedback) {
        
        feedbackRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Feedback with id "+ id + " is not found"));
        
            feedback.setId(id);
            return feedbackRepository.save(feedback);
    }

    @Override
    public FeedbackDTO patchFeedback(String id, FeedbackDTO feedbackDTO){

        Feedback feedback = getFeedbackById(id);

        FeedbackMapper.mapDtoToEntity(feedbackDTO, feedback);

        Feedback patched = feedbackRepository.save(feedback);

        return FeedbackMapper.mapEntityToDto(patched);
    }

    @Override
    public void deleteFeedback(String id) {
        feedbackRepository.deleteById(id);
    }
}