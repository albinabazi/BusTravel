package com.bustravel.busFeedback;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FeedbackService {
    Page<Feedback> getAllFeedback(Pageable pageable);
    Feedback getFeedbackById(String id);
    Feedback createFeedback(Feedback feedback);
    Feedback updateFeedback(String id, Feedback feedback);
    FeedbackDTO patchFeedback(String id, FeedbackDTO feedbackDTO);
    void deleteFeedback(String id);
}
