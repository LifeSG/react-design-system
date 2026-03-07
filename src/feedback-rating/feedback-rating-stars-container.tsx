import { KeyboardEvent } from "react";
import { StarContainerData } from "./feedback-rating-stars-container-data";
import {
    Container,
    Label,
    StarFilled,
    StarUnfilled,
} from "./feedback-rating-stars-container.styles";
import { FeedbackRatingStarsContainerProps } from "./types";

export const FeedbackRatingStarsContainer = (
    props: FeedbackRatingStarsContainerProps
): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { description, describedBy, rating, onRatingChange } = props;
    const maxRating = StarContainerData.MAX_STAR;
    const currentRating = Math.min(Math.max(rating ?? 0, 0), maxRating);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleStarSelection = (starIndex: number) => {
        onRatingChange(starIndex);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case "ArrowRight":
            case "ArrowUp":
                event.preventDefault();
                onRatingChange(Math.min(currentRating + 1, maxRating));
                break;
            case "ArrowLeft":
            case "ArrowDown":
                event.preventDefault();
                onRatingChange(Math.max(currentRating - 1, 0));
                break;
            case "Home":
                event.preventDefault();
                onRatingChange(1);
                break;
            case "End":
                event.preventDefault();
                onRatingChange(maxRating);
                break;
            default:
                break;
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const getAriaValueText = () => {
        if (currentRating === 0) {
            return "0 stars";
        }

        if (currentRating === 1) {
            return "1 star";
        }

        return `${currentRating} stars`;
    };

    const renderStar = (starIndex: number) => {
        if (starIndex <= currentRating) {
            return <StarFilled aria-hidden="true" />;
        } else {
            return <StarUnfilled aria-hidden="true" />;
        }
    };

    const renderRatings = () => {
        return [...Array(maxRating)].map((_star, index) => {
            const starIndex = index + 1;

            return (
                <Label
                    key={starIndex}
                    type="button"
                    tabIndex={-1}
                    aria-hidden="true"
                    onClick={() => handleStarSelection(starIndex)}
                >
                    {renderStar(starIndex)}
                </Label>
            );
        });
    };

    return (
        <Container
            role="slider"
            tabIndex={0}
            aria-labelledby={description}
            aria-describedby={describedBy}
            aria-label="Rating"
            aria-valuemin={1}
            aria-valuemax={maxRating}
            aria-valuenow={currentRating}
            aria-valuetext={getAriaValueText()}
            onKeyDown={handleKeyDown}
        >
            {renderRatings()}
        </Container>
    );
};
