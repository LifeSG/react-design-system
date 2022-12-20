import { StarContainerData } from "./feedback-rating-stars-container-data";
import {
    Container,
    Img,
    Input,
    Label,
} from "./feedback-rating-stars-container.styles";
import { FeedbackRatingStarsContainerProps } from "./types";
import StarFilledIcon from "./star-filled-icon.png";
import StarUnfilledIcon from "./star-unfilled-icon.png";

export const FeedbackRatingStarsContainer = ({
    rating,
    onRatingChange,
}: FeedbackRatingStarsContainerProps): JSX.Element => {
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
        const altText = `${starIndex} star${starIndex === 1 ? "" : "s"}${
            rating === starIndex ? ", selected" : ""
        }`;
        if (starIndex <= rating) {
            return <Img src={StarFilledIcon} alt={altText} />;
        } else {
            return <Img src={StarUnfilledIcon} alt={altText} />;
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
                        aria-label={`star-${index + 1}-${
                            index + 1 <= rating ? "selected" : "unselected"
                        }`}
                        checked={index + 1 === rating}
                        onChange={() => handleStarSelection(index + 1)}
                    />
                    {renderStar(index + 1)}
                </Label>
            );
        });
    };

    return <Container>{renderRatings()}</Container>;
};
