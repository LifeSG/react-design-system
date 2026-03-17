"use client";

import { useState } from "react";
import { FeedbackRating } from "@lifesg/react-design-system/feedback-rating";

export default function Story() {
    const [rating, setRating] = useState(0);

    return (
        <div data-testid="feedback-rating-story">
            <FeedbackRating
                rating={rating}
                onRatingChange={setRating}
                onSubmit={() => undefined}
            />
        </div>
    );
}
