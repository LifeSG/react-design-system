import React from "react";
import {
    ButtonContainer,
    CrossIcon,
    Description,
    DismissButton,
    DismissContainer,
    LifeSgAppIcon,
    ProceedContainer,
    RatingContainer,
    SmartAppBannerContainer,
    StyledButton,
    TextContainer,
    Title,
} from "./smart-app-banner.styles";

interface SmartAppBannerProps {
    show: boolean;
    link: string;
    content: Content;
    offset?: number | undefined;
    icon?: string | undefined;
    isAnimated?: boolean | undefined;
    className?: string | undefined;
    onBannerDismiss: () => void;
    onBannerPress?: () => void | undefined;
}

interface Content {
    title: string;
    buttonLabel: string;
    buttonAriaLabel: string;
    message?: string | undefined;
    numberOfStars: number;
}

const APP_ICON =
    "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png";
const STAR_IMG =
    "https://assets.life.gov.sg/react-design-system/img/star-rating/full-star.svg";
const HALF_STAR_IMG =
    "https://assets.life.gov.sg/react-design-system/img/star-rating/half-star.svg";
const EMPTY_STAR_IMG =
    "https://assets.life.gov.sg/react-design-system/img/star-rating/empty-star.svg";

const ID = "smart-app-banner";

function SmartAppBannerComponent(
    props: SmartAppBannerProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element {
    const {
        className,
        show,
        link,
        content,
        offset = 0,
        icon = APP_ICON,
        isAnimated = false,
        onBannerDismiss,
        onBannerPress,
    } = props;
    const onPress = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        e.stopPropagation();
        window.open(link, "_blank", "noreferrer");
        onBannerPress?.();
    };

    const { title, message, buttonLabel, buttonAriaLabel, numberOfStars } =
        content;

    const generateStarRating = () => {
        if (isNaN(numberOfStars) || numberOfStars < 0) {
            return;
        }

        const stars = [];
        const hasHalfStar = numberOfStars - Math.floor(numberOfStars) >= 0.4;

        for (let i = 0; i < Math.floor(numberOfStars); i++) {
            stars.push(<img alt="" src={STAR_IMG} />);
        }
        if (hasHalfStar) {
            stars.push(<img alt="" src={HALF_STAR_IMG} />);
        }
        if (stars.length < 5) {
            const remaining = 5 - stars.length;
            for (let i = 0; i < remaining; i++) {
                stars.push(<img alt="" src={EMPTY_STAR_IMG} />);
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
                    $isAnimated={isAnimated}
                    $offset={offset}
                    className={className}
                >
                    <DismissContainer
                        onClick={onBannerDismiss}
                        id={`${ID}-dismiss`}
                        data-testid={`${ID}-dismiss-container`}
                    >
                        <DismissButton aria-label="Dismiss">
                            <CrossIcon type="cross" />
                        </DismissButton>
                    </DismissContainer>
                    <ProceedContainer
                        onClick={onPress}
                        id={`${ID}-proceed`}
                        data-testid={`${ID}-proceed-container`}
                    >
                        <LifeSgAppIcon src={icon} alt="" />
                        <TextContainer>
                            <Title>{title}</Title>
                            <Description>{message}</Description>
                            {generateStarRating()}
                        </TextContainer>
                        <ButtonContainer>
                            <StyledButton
                                onClick={onPress}
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
