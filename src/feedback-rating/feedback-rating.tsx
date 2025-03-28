import { Typography } from "../typography/typography";
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
                    data-testid="feedback-banner-image"
                    src={bannerSrc}
                    alt=""
                    onError={(event) =>
                        (event.currentTarget.style.display = "none")
                    }
                />
            )}
            <ChildContainer>
                <Typography.HeadingSM as="div" weight="semibold">
                    {componentDescription}
                </Typography.HeadingSM>
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
