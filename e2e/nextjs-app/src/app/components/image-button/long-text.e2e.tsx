"use client";
import { ImageButton } from "@lifesg/react-design-system/image-button";

export default function Story() {
    return (
        <ImageButton
            data-testid="image-button-long-text"
            imgSrc="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
            selected
        >
            This is a very long label text that may overflow the button
        </ImageButton>
    );
}
