import { Typography } from "../typography";
import * as styles from "./footer-download-app.styles";

const APP_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png";
const PLAY_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png";

export const DownloadApp = () => (
    <div className={styles.wrapper} data-testid="download-app-section">
        <Typography.BodyMD className={styles.label} weight="semibold">
            Download the app
        </Typography.BodyMD>
        <div className={styles.appButtonsWrapper}>
            <a
                className={styles.appStoreLink}
                href="https://apps.apple.com/sg/app/moments-of-life/id1383218758"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-download-app-apple"
            >
                <img src={APP_STORE_ICON} alt="Download on the App Store" />
            </a>
            <a
                className={styles.appStoreLink}
                href="https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-download-app-android"
            >
                <img src={PLAY_STORE_ICON} alt="Get it on Google Play" />
            </a>
        </div>
    </div>
);
