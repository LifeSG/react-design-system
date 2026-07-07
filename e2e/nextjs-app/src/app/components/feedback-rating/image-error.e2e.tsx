"use client";
import { useState } from "react";
import { FeedbackRating } from "@lifesg/react-design-system/feedback-rating";

export default function Story() {
    const [rating, setRating] = useState(0);

    return (
        <div className="story-column-container story-background">
            <FeedbackRating
                data-testid="feedback-rating"
                imgSrc="https://assets.life.gov.sg/react-design-system/invalid"
                rating={rating}
                onRatingChange={setRating}
                onSubmit={() => {}}
            />
        </div>
    );
}
