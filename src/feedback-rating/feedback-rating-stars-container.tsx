import { ChangeEvent, useRef, useState } from "react";
import { VisuallyHidden } from "../shared/accessibility";
import { StarContainerData } from "./feedback-rating-stars-container-data";
import {
    Container,
    Label,
    StarFilled,
    StarUnfilled,
} from "./feedback-rating-stars-container.styles";

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
    const { ariaDescribedBy, rating, onRatingChange } = props;
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
        if (currentRating === 0) {
            return "0 stars";
        }

        return `${currentRating} star${currentRating === 1 ? "" : "s"}`;
    };

    const renderStar = (starIndex: number) => {
        if (starIndex <= currentRating) {
            return <StarFilled aria-hidden />;
        }

        return <StarUnfilled aria-hidden />;
    };

    const renderRatings = () => {
        return [...Array(maxRating)].map((_star, index) => {
            const starIndex = index + 1;

            return (
                <Label
                    key={starIndex}
                    role="presentation"
                    onClick={() => handleStarSelection(starIndex)}
                >
                    {renderStar(starIndex)}
                </Label>
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
                    aria-describedby={ariaDescribedBy}
                    aria-valuetext={getAriaValueText()}
                    onChange={handleRangeChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </VisuallyHidden>
            <Container aria-hidden $isFocused={isFocused}>
                {renderRatings()}
            </Container>
        </>
    );
};
