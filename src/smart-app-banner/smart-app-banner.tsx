import {
    CrossIcon,
    Description,
    DismissButton,
    DismissContainer,
    DownloadButton,
    DownloadContainer,
    LifeSgAppIcon,
    ProceedContainer,
    SmartAppBannerContainer,
    TextContainer,
    Title,
} from "./smart-app-banner.styles";

interface SmartAppBannerProps {
    show: boolean;
    link: string;
    content: Content;
    offset?: number | undefined;
    className?: string | undefined;
    onBannerDismiss: () => void;
    onBannerPress?: () => void | undefined;
}

interface Content {
    title: string;
    buttonLabel: string;
    buttonAriaLabel: string;
    message?: string;
}

const APP_ICON =
    "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png";

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
    const onPress = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        e.stopPropagation();
        window.open(link, "_blank", "noreferrer");
        onBannerDismiss();
        onBannerPress?.();
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
                            <Title>{content.title}</Title>
                            <Description>{content.message}</Description>
                        </TextContainer>
                        <DownloadContainer>
                            <DownloadButton
                                onClick={onPress}
                                aria-label={content.buttonAriaLabel}
                            >
                                {content.buttonLabel}
                            </DownloadButton>
                        </DownloadContainer>
                    </ProceedContainer>
                </SmartAppBannerContainer>
            )}
        </>
    );
};
