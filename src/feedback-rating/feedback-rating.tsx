import { FeedbackRatingData } from "./feedback-rating-data";
import { Text } from "src/text";
import {
    ChildContainer,
    Image,
    MainContainer,
    SubmitButton,
} from "./feedback-rating.styles";
import { StarsContainer } from "./stars-container";
import { FeedbackRatingProp } from "./types";

export const FeedbackRating = ({
    imgSrc,
    buttonLabel,
    description,
    ratings,
    onRatingsChange,
    onSubmit,
}: FeedbackRatingProp): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const bannerSrc = imgSrc ?? FeedbackRatingData.IMG;

    return (
        <MainContainer>
            {bannerSrc && (
                <Image src={bannerSrc} alt={FeedbackRatingData.IMG_ALT}></Image>
            )}
            <ChildContainer>
                <Text.H3 weight={"semibold"}>
                    {description ?? FeedbackRatingData.DEFAULT_DESCRIPTION}
                </Text.H3>
                <StarsContainer
                    ratings={ratings}
                    onRatingsChange={onRatingsChange}
                ></StarsContainer>
                <SubmitButton disabled={!ratings} onClick={onSubmit}>
                    {buttonLabel ?? FeedbackRatingData.DEFAULT_BUTTON_LABEL}
                </SubmitButton>
            </ChildContainer>
        </MainContainer>
    );
};
