"use client";
import { ImageButton } from "@lifesg/react-design-system/image-button";

export default function Story() {
    return (
        <div className="story-row-container">
            <ImageButton
                data-testid="image-button-default"
                imgSrc="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
            >
                Default
            </ImageButton>

            <ImageButton
                data-testid="image-button-selected"
                imgSrc="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
                selected
            >
                Selected
            </ImageButton>

            <ImageButton
                data-testid="image-button-error"
                imgSrc="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
                error
            >
                Error
            </ImageButton>

            <ImageButton
                data-testid="image-button-error-selected"
                imgSrc="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
                error
                selected
            >
                Error Selected
            </ImageButton>

            <ImageButton
                data-testid="image-button-disabled"
                imgSrc="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
                disabled
            >
                Disabled
            </ImageButton>
        </div>
    );
}
