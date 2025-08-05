import {
    AppButtonsWrapper,
    AppStoreLink,
    Label,
    Wrapper,
} from "./footer-download-app.style";

const APP_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png";
const PLAY_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png";

export const DownloadApp = () => (
    <Wrapper data-testid="download-app-section">
        <Label weight="semibold">Download the app</Label>
        <AppButtonsWrapper>
            <AppStoreLink
                href="https://apps.apple.com/sg/app/moments-of-life/id1383218758"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-download-app-apple"
            >
                <img src={APP_STORE_ICON} alt="Download on the App Store" />
            </AppStoreLink>
            <AppStoreLink
                href="https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-download-app-android"
            >
                <img src={PLAY_STORE_ICON} alt="Get it on Google Play" />
            </AppStoreLink>
        </AppButtonsWrapper>
    </Wrapper>
);
