package com.bustravel.busFeedback;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public interface FeedbackMapper {
    
    public static void mapDtoToEntity(FeedbackDTO feedbackDTO, Feedback feedback) {

        if (feedbackDTO.getText() != null) {
            feedback.setText(feedbackDTO.getText());
        }

        if (feedbackDTO.getCompanyName() != null) {
            feedback.setCompanyName(feedbackDTO.getCompanyName());
        }

        if (feedbackDTO.getDate() != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
            ZonedDateTime zonedDateTime = ZonedDateTime.parse(feedbackDTO.getDate(), formatter.withZone(ZoneId.of("Europe/Belgrade")));
            feedback.setDate(zonedDateTime.toLocalDateTime());
        }
    }

    public static FeedbackDTO mapEntityToDto(Feedback feedback) {
        FeedbackDTO feedbackDTO = new FeedbackDTO();

        feedbackDTO.setId(feedback.getId());
        feedbackDTO.setText(feedback.getText());
        feedbackDTO.setCompanyName(feedback.getCompanyName());
        feedbackDTO.setDate(feedback.getDate().atZone(ZoneId.of("Europe/Belgrade")).format(DateTimeFormatter.ISO_DATE_TIME));

        return feedbackDTO;
    }
}