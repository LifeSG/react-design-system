"use client";
import { ImageButton } from "@lifesg/react-design-system/image-button";
import { useState } from "react";

export default function Story() {
    const [clickCount, setClickCount] = useState(0);

    return (
        <div className="story-column-container">
            <button data-testid="focus-start">Focus start</button>

            <ImageButton
                data-testid="image-button"
                imgSrc="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
                onClick={() => setClickCount((c) => c + 1)}
            >
                Label
            </ImageButton>

            <span data-testid="click-count">{clickCount}</span>
        </div>
    );
}
