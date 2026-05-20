import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import clsx from "clsx";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";

import { VisuallyHidden } from "../shared/accessibility";
import * as styles from "./feedback-rating-stars-container.styles";
import { StarContainerData } from "./feedback-rating-stars-container-data";

interface FeedbackRatingStarsContainerProps {
    ariaLabelledBy: string;
    ariaDescribedBy: string;
    rating: number;
    onRatingChange: (value: number) => void;
}

export const FeedbackRatingStarsContainer = (
    props: FeedbackRatingStarsContainerProps
): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { ariaLabelledBy, ariaDescribedBy, rating, onRatingChange } = props;
    const maxRating = StarContainerData.MAX_STAR;
    const currentRating = Math.min(Math.max(rating ?? 0, 0), maxRating);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleStarSelection = (starIndex: number) => {
        onRatingChange(starIndex);
        inputRef.current?.focus();
    };

    const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        onRatingChange(Number(event.target.value));
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const getAriaValueText = () => {
        return `${currentRating} star${currentRating === 1 ? "" : "s"}`;
    };

    const renderStar = (starIndex: number) => {
        if (starIndex <= currentRating) {
            return <StarFillIcon aria-hidden className={styles.star} />;
        }

        return <StarIcon aria-hidden className={styles.star} />;
    };

    const renderRatings = () => {
        return [...Array(maxRating)].map((_star, index) => {
            const starIndex = index + 1;

            return (
                <div
                    key={starIndex}
                    className={styles.label}
                    data-testid={`feedback-rating-star-${starIndex}`}
                    onClick={() => handleStarSelection(starIndex)}
                >
                    {renderStar(starIndex)}
                </div>
            );
        });
    };

    return (
        <>
            <VisuallyHidden>
                <input
                    ref={inputRef}
                    type="range"
                    min={0}
                    max={maxRating}
                    step={1}
                    value={currentRating}
                    aria-labelledby={ariaLabelledBy}
                    aria-describedby={ariaDescribedBy}
                    aria-valuetext={getAriaValueText()}
                    onChange={handleRangeChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </VisuallyHidden>
            <div
                aria-hidden
                className={clsx(
                    styles.container,
                    isFocused && styles.containerIsFocused
                )}
            >
                {renderRatings()}
            </div>
        </>
    );
};
