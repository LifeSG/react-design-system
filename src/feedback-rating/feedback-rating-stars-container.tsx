import { StarContainerData } from "./feedback-rating-stars-container-data";
import {
    Container,
    Input,
    Label,
    StarIcon,
} from "./feedback-rating-stars-container.styles";
import { FeedbackRatingStarsContainerProps } from "./types";

export const FeedbackRatingStarsContainer = (
    props: FeedbackRatingStarsContainerProps
): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { description, rating, onRatingChange } = props;

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleStarSelection = (starIndex: number) => {
        onRatingChange(starIndex);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderStar = (starIndex: number) => {
        const ariaLabel = `${starIndex} star${starIndex === 1 ? "" : "s"}`;

        if (starIndex <= rating) {
            return (
                <StarIcon
                    type="star-rating-filled"
                    aria-label={ariaLabel}
                ></StarIcon>
            );
        } else {
            return (
                <StarIcon
                    type="star-rating-unfilled"
                    aria-label={ariaLabel}
                ></StarIcon>
            );
        }
    };

    const renderRatings = () => {
        return [...Array(StarContainerData.MAX_STAR)].map((_star, index) => {
            const starIndex = index + 1;
            return (
                <Label key={starIndex}>
                    <Input
                        type="radio"
                        name="star"
                        checked={starIndex === rating}
                        onChange={() => handleStarSelection(starIndex)}
                    />
                    {renderStar(starIndex)}
                </Label>
            );
        });
    };

    return (
        <Container role="radiogroup" aria-label={description}>
            {renderRatings()}
        </Container>
    );
};
