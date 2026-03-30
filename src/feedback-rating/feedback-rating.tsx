import { useState } from "react";

import { VisuallyHidden } from "../shared/accessibility";
import { SimpleIdGenerator } from "../util";
import {
    ChildContainer,
    Image,
    MainContainer,
    SubmitButton,
    Title,
} from "./feedback-rating.styles";
import { FeedbackRatingData } from "./feedback-rating-data";
import { FeedbackRatingStarsContainer } from "./feedback-rating-stars-container";
import type { FeedbackRatingProps } from "./types";

export const FeedbackRating = (props: FeedbackRatingProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const {
        imgSrc,
        buttonLabel,
        description,
        rating,
        onRatingChange,
        onSubmit,
        ...otherProps
    } = props;
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const descriptionId = `${internalId}-description`;
    const bannerSrc = imgSrc ?? FeedbackRatingData.IMG;
    const componentDescription =
        description ?? FeedbackRatingData.DEFAULT_DESCRIPTION;
    const resolvedButtonLabel =
        buttonLabel ?? FeedbackRatingData.DEFAULT_BUTTON_LABEL;
    const isSubmitDisabled = !rating;

    return (
        <MainContainer
            role="group"
            aria-labelledby={internalId}
            {...otherProps}
        >
            {bannerSrc && (
                <Image
                    data-testid="feedback-banner-image"
                    src={bannerSrc}
                    alt=""
                    onError={(event) =>
                        (event.currentTarget.style.display = "none")
                    }
                />
            )}
            <ChildContainer>
                <Title id={internalId}>{componentDescription}</Title>
                <FeedbackRatingStarsContainer
                    ariaLabelledBy={internalId}
                    ariaDescribedBy={descriptionId}
                    rating={rating}
                    onRatingChange={onRatingChange}
                />
                <VisuallyHidden id={descriptionId}>
                    Minimum, 1 star. Maximum, 5 stars.
                </VisuallyHidden>
                <SubmitButton
                    disabled={isSubmitDisabled}
                    focusableWhenDisabled
                    onClick={onSubmit}
                    type="button"
                >
                    {resolvedButtonLabel}
                </SubmitButton>
            </ChildContainer>
        </MainContainer>
    );
};
