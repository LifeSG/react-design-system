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

    const handleKeyUp = (
        event: React.KeyboardEvent<HTMLLabelElement>,
        value: number
    ) => {
        if (event.key === "Enter") {
            handleStarSelection(value);
        }
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
            return (
                <Label
                    key={index + 1}
                    tabIndex={0}
                    onKeyUp={(e) => handleKeyUp(e, index + 1)}
                >
                    <Input
                        tabIndex={-1}
                        type="radio"
                        name="star"
                        checked={index + 1 === rating}
                        onChange={() => handleStarSelection(index + 1)}
                    />
                    {renderStar(index + 1)}
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
