import React from "react";
import {
    BannerIcon,
    ButtonContainer,
    Cross,
    Description,
    DismissButton,
    DismissContainer,
    ProceedContainer,
    RatingContainer,
    SmartAppBannerContainer,
    Star,
    StarEmpty,
    StarHalf,
    StyledButton,
    TextContainer,
    Title,
} from "./smart-app-banner.styles";
import { SmartAppBannerProps } from "./types";

const APP_ICON =
    "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png";

const ID = "smart-app-banner";

function SmartAppBannerComponent(
    props: SmartAppBannerProps,
    ref: React.Ref<HTMLDivElement>
): React.JSX.Element {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        className,
        show,
        href,
        content,
        offset = 0,
        icon = APP_ICON,
        animated = false,
        onDismiss,
        onClick,
    } = props;

    const { title, message, buttonLabel, buttonAriaLabel, numberOfStars } =
        content;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        e.stopPropagation();
        window.open(href, "_blank", "noreferrer");
        onClick?.();
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const generateStarRating = () => {
        if (isNaN(numberOfStars) || numberOfStars < 0) {
            return;
        }

        const stars = [];
        const hasHalfStar = numberOfStars - Math.floor(numberOfStars) >= 0.4;

        for (let i = 0; i < Math.floor(numberOfStars); i++) {
            stars.push(<Star key={`star${i}`} />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalf key={`halfstar`} />);
        }
        if (stars.length < 5) {
            const remaining = 5 - stars.length;
            for (let i = 0; i < remaining; i++) {
                stars.push(<StarEmpty key={`emptystar${i}`} />);
            }
        }

        /* maximum of 5 stars */
        return <RatingContainer>{stars.slice(0, 5)}</RatingContainer>;
    };

    return (
        <>
            {show && (
                <SmartAppBannerContainer
                    ref={ref}
                    $isAnimated={animated}
                    $offset={offset}
                    className={className}
                >
                    <DismissContainer
                        onClick={onDismiss}
                        id={`${ID}-dismiss`}
                        data-testid={`${ID}-dismiss-container`}
                    >
                        <DismissButton aria-label="Dismiss">
                            <Cross />
                        </DismissButton>
                    </DismissContainer>
                    <ProceedContainer
                        onClick={handleClick}
                        id={`${ID}-proceed`}
                        data-testid={`${ID}-proceed-container`}
                    >
                        <BannerIcon src={icon} alt="lifesg-app-icon" />
                        <TextContainer>
                            <Title>{title}</Title>
                            <Description>{message}</Description>
                            {generateStarRating()}
                        </TextContainer>
                        <ButtonContainer>
                            <StyledButton
                                type="button"
                                onClick={handleClick}
                                aria-label={buttonAriaLabel}
                            >
                                {buttonLabel}
                            </StyledButton>
                        </ButtonContainer>
                    </ProceedContainer>
                </SmartAppBannerContainer>
            )}
        </>
    );
}

export const SmartAppBanner = React.forwardRef(SmartAppBannerComponent);
