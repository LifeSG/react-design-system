import { StarContainerData } from "./stars-container-data";
import { Button, Img, Ul } from "./stars-container.styles";
import { StarsContainerProp } from "./types";
import StarFilledIcon from "./star-filled-icon.png";
import StarUnfilledIcon from "./star-unfilled-icon.png";

export const StarsContainer = ({
    ratings,
    onRatingsChange,
}: StarsContainerProp): JSX.Element => {
    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleStarSelection = (starIndex: number) => {
        onRatingsChange(starIndex);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderStar = (starIndex: number) => {
        const altText = `${starIndex} star${starIndex === 1 ? "" : "s"}${
            ratings === starIndex ? ", selected" : ""
        }`;
        if (starIndex <= ratings) {
            return <Img src={StarFilledIcon} alt={altText} />;
        } else {
            return <Img src={StarUnfilledIcon} alt={altText} />;
        }
    };

    const renderRatings = () => {
        return [...Array(StarContainerData.MAX_STAR)].map((_star, index) => {
            return (
                <li key={index + 1}>
                    <Button
                        role="button"
                        aria-label={`star-${index + 1}-${
                            index + 1 <= ratings ? "selected" : "unselected"
                        }`}
                        key={index + 1}
                        data-id={index + 1}
                        onClick={() => handleStarSelection(index + 1)}
                    >
                        {renderStar(index + 1)}
                    </Button>
                </li>
            );
        });
    };

    return <Ul>{renderRatings()}</Ul>;
};
