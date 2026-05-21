import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Button } from "../button";
import { VisuallyHidden } from "../shared/accessibility";
import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./feedback-rating.styles";
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
        className,
        id,
        "data-testid": testId,
        ...otherProps
    } = props;
    const [hasImageError, setHasImageError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const internalId = useId();
    const descriptionId = `${internalId}-description`;
    const bannerSrc = imgSrc ?? FeedbackRatingData.IMG;
    const componentDescription =
        description ?? FeedbackRatingData.DEFAULT_DESCRIPTION;
    const resolvedButtonLabel =
        buttonLabel ?? FeedbackRatingData.DEFAULT_BUTTON_LABEL;
    const isSubmitDisabled = !rating;

    useEffect(() => {
        setHasImageError(false);

        if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
            setHasImageError(true);
        }
    }, [bannerSrc]);

    return (
        <div
            role="group"
            aria-labelledby={internalId}
            className={clsx(styles.mainContainer, className)}
            id={id}
            data-testid={testId}
            {...otherProps}
        >
            {bannerSrc && !hasImageError && (
                <img
                    ref={imgRef}
                    className={styles.image}
                    data-testid="feedback-banner-image"
                    src={bannerSrc}
                    alt=""
                />
            )}
            <div className={styles.childContainer}>
                <Typography.HeadingSM as="h2" id={internalId} weight="semibold">
                    {componentDescription}
                </Typography.HeadingSM>
                <FeedbackRatingStarsContainer
                    ariaLabelledBy={internalId}
                    ariaDescribedBy={descriptionId}
                    rating={rating}
                    onRatingChange={onRatingChange}
                />
                <VisuallyHidden id={descriptionId}>
                    Minimum, 1 star. Maximum, 5 stars.
                </VisuallyHidden>
                <Button
                    className={styles.submitButton}
                    disabled={isSubmitDisabled}
                    focusableWhenDisabled
                    onClick={onSubmit}
                    type="button"
                >
                    {resolvedButtonLabel}
                </Button>
            </div>
        </div>
    );
};
