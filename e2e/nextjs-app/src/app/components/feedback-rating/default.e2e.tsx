"use client";
import { FeedbackRating } from "@lifesg/react-design-system/feedback-rating";
import { useState } from "react";

export default function Story() {
    const [rating, setRating] = useState(0);

    return (
        <div className="story-column-container story-background">
            <FeedbackRating
                data-testid="feedback-rating"
                rating={rating}
                onRatingChange={setRating}
                onSubmit={() => {}}
            />
        </div>
    );
}
