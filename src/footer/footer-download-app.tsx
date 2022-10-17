import {
    AppStoreLink,
    Items,
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
        <Items>
            <AppStoreLink
                href="https://apps.apple.com/sg/app/moments-of-life/id1383218758"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={APP_STORE_ICON} alt="apple-app-store" />
            </AppStoreLink>
            <AppStoreLink
                href="https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={PLAY_STORE_ICON} alt="google-play-store" />
            </AppStoreLink>
        </Items>
    </Wrapper>
);
