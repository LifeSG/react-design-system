import {
    ClickableContainer,
    CloseContainer,
    CrossButton,
    CrossIcon,
    Description,
    DownloadButton,
    DownloadContainer,
    LifeSgAppIcon,
    SmartAppBannerContainer,
    TextContainer,
    Title,
} from "./smart-app-banner.styles";

interface SmartAppBannerProps {
    show: boolean;
    link: string;
    content: Content;
    offset?: number;
    className?: string;
    onBannerDismiss: () => void;
    onBannerPress?: () => void;
}

interface Content {
    title: string;
    buttonLabel: string;
    buttonAriaLabel: string;
    message?: string;
}

const APP_ICON =
    "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png";

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
                    <CloseContainer onClick={onBannerDismiss}>
                        <CrossButton aria-label="Dismiss">
                            <CrossIcon type="cross" />
                        </CrossButton>
                    </CloseContainer>
                    <ClickableContainer onClick={onPress}>
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
                    </ClickableContainer>
                </SmartAppBannerContainer>
            )}
        </>
    );
};
