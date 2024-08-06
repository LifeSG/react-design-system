import { V2_Text } from "../v2_text";
import { FeedbackRatingData } from "./feedback-rating-data";
import { FeedbackRatingStarsContainer } from "./feedback-rating-stars-container";
import {
    ChildContainer,
    Image,
    MainContainer,
    SubmitButton,
} from "./feedback-rating.styles";
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
        onRatingChange,
        onSubmit,
        ...otherProps
    } = props;
    const bannerSrc = imgSrc ?? FeedbackRatingData.IMG;
    const componentDescription =
        description ?? FeedbackRatingData.DEFAULT_DESCRIPTION;

    return (
        <MainContainer {...otherProps}>
            {bannerSrc && (
                <Image
                    src={bannerSrc}
                    alt=""
                    aria-label="banner image"
                    onError={(event) =>
                        (event.currentTarget.style.display = "none")
                    }
                />
            )}
            <ChildContainer>
                <V2_Text.H3 weight={"semibold"}>
                    {componentDescription}
                </V2_Text.H3>
                <FeedbackRatingStarsContainer
                    description={componentDescription}
                    rating={rating}
                    onRatingChange={onRatingChange}
                />
                <SubmitButton
                    disabled={!rating}
                    onClick={onSubmit}
                    type="button"
                >
                    {buttonLabel ?? FeedbackRatingData.DEFAULT_BUTTON_LABEL}
                </SubmitButton>
            </ChildContainer>
        </MainContainer>
    );
};
