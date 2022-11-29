import {
    CrossIcon,
    Description,
    DismissButton,
    DismissContainer,
    DownloadButton,
    DownloadContainer,
    LifeSgAppIcon,
    ProceedContainer,
    RatingContainer,
    SmartAppBannerContainer,
    TextContainer,
    Title,
} from "./smart-app-banner.styles";
import { SmartAppBannerProps } from "./types";

const APP_ICON =
    "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png";
const STAR_IMG =
    "https://assets.life.gov.sg/react-design-system/img/star-rating/full-star.svg";
const HALF_STAR_IMG =
    "https://assets.life.gov.sg/react-design-system/img/star-rating/half-star.svg";
const EMPTY_STAR_IMG =
    "https://assets.life.gov.sg/react-design-system/img/star-rating/empty-star.svg";

const ID = "smart-app-banner";

export const SmartAppBanner = ({
    className,
    show,
    link,
    content,
    offset = 0,
    onBannerDismiss,
    onBannerPress,
}: SmartAppBannerProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { title, message, buttonLabel, buttonAriaLabel, numberOfStars } =
        content;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const onPress = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        e.stopPropagation();
        window.open(link, "_blank", "noreferrer");
        onBannerDismiss();
        onBannerPress?.();
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
            stars.push(<img key={`star${i}`} alt="" src={STAR_IMG} />);
        }
        if (hasHalfStar) {
            stars.push(<img key={`halfstar`} alt="" src={HALF_STAR_IMG} />);
        }
        if (stars.length < 5) {
            const remaining = 5 - stars.length;
            for (let i = 0; i < remaining; i++) {
                stars.push(
                    <img key={`emptystar${i}`} alt="" src={EMPTY_STAR_IMG} />
                );
            }
        }

        /* maximum of 5 stars */
        return <RatingContainer>{stars.slice(0, 5)}</RatingContainer>;
    };

    return (
        <>
            {show && (
                <SmartAppBannerContainer $offset={offset} className={className}>
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
                        <LifeSgAppIcon src={APP_ICON} alt="" />
                        <TextContainer>
                            <Title>{title}</Title>
                            <Description>{message}</Description>
                            {generateStarRating()}
                        </TextContainer>
                        <DownloadContainer>
                            <DownloadButton
                                onClick={onPress}
                                aria-label={buttonAriaLabel}
                            >
                                {buttonLabel}
                            </DownloadButton>
                        </DownloadContainer>
                    </ProceedContainer>
                </SmartAppBannerContainer>
            )}
        </>
    );
};
