import { FeedbackRatingData } from "./feedback-rating-data";
import { Text } from "src/text";
import {
    ChildContainer,
    Image,
    MainContainer,
    SubmitButton,
} from "./feedback-rating.styles";
import { FeedbackRatingStarsContainer } from "./feedback-rating-stars-container";
import { FeedbackRatingProps } from "./types";

export const FeedbackRating = (props: FeedbackRatingProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const {
        imgSrc,
        buttonLabel,
        description,
        rating,
        className,
        onRatingChange,
        onSubmit,
    } = props;
    const bannerSrc = imgSrc ?? FeedbackRatingData.IMG;

    return (
        <MainContainer className={className}>
            {bannerSrc && (
                <Image
                    src={bannerSrc}
                    onError={(event) =>
                        (event.currentTarget.style.display = "none")
                    }
                ></Image>
            )}
            <ChildContainer>
                <Text.H3 weight={"semibold"}>
                    {description ?? FeedbackRatingData.DEFAULT_DESCRIPTION}
                </Text.H3>
                <FeedbackRatingStarsContainer
                    rating={rating}
                    onRatingChange={onRatingChange}
                ></FeedbackRatingStarsContainer>
                <SubmitButton disabled={!rating} onClick={onSubmit}>
                    {buttonLabel ?? FeedbackRatingData.DEFAULT_BUTTON_LABEL}
                </SubmitButton>
            </ChildContainer>
        </MainContainer>
    );
};
