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
const MAX_STARS = 5;

function SmartAppBannerComponent(
    props: SmartAppBannerProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element {
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

    const {
        title,
        message,
        buttonLabel,
        iconAriaLabel,
        buttonAriaLabel,
        numberOfStars,
    } = content;

    const ariaLabels = {
        dismiss: "Close banner",
        icon: iconAriaLabel ?? "",
        cta: buttonAriaLabel ?? buttonLabel,
    };
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
            stars.push(<Star key={`star${i}`} aria-hidden />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalf key={`halfstar`} aria-hidden />);
        }
        if (stars.length < MAX_STARS) {
            const remaining = 5 - stars.length;
            for (let i = 0; i < remaining; i++) {
                stars.push(<StarEmpty key={`emptystar${i}`} aria-hidden />);
            }
        }

        /* maximum of 5 stars */
        return (
            <RatingContainer
                role="group"
                aria-label={`A rating of ${numberOfStars} out of ${MAX_STARS} stars`}
            >
                {stars.slice(0, MAX_STARS)}
            </RatingContainer>
        );
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
                    <ProceedContainer
                        onClick={handleClick}
                        id={`${ID}-proceed`}
                        data-testid={`${ID}-proceed-container`}
                    >
                        <BannerIcon src={icon} alt={ariaLabels.icon} />
                        <TextContainer>
                            <Title>{title}</Title>
                            <Description>{message}</Description>
                            {generateStarRating()}
                        </TextContainer>
                        <ButtonContainer>
                            <StyledButton
                                type="button"
                                onClick={handleClick}
                                aria-label={ariaLabels.cta}
                            >
                                {buttonLabel}
                            </StyledButton>
                        </ButtonContainer>
                    </ProceedContainer>
                    <DismissContainer
                        onClick={onDismiss}
                        id={`${ID}-dismiss`}
                        data-testid={`${ID}-dismiss-container`}
                    >
                        <DismissButton aria-label={ariaLabels.dismiss}>
                            <Cross />
                        </DismissButton>
                    </DismissContainer>
                </SmartAppBannerContainer>
            )}
        </>
    );
}

export const SmartAppBanner = React.forwardRef(SmartAppBannerComponent);
