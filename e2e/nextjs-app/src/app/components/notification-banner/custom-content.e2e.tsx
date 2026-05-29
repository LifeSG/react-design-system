"use client";
import { GearFillIcon } from "@lifesg/react-icons/gear-fill";
import { NotificationBanner } from "@lifesg/react-design-system/notification-banner";
import styles from "./notification-banner.module.css";

export default function Story() {
    return (
        <div className="story-column-container">
            <NotificationBanner data-testid="banner-custom-content">
                <div
                    data-testid="custom-content-wrapper"
                    className={styles.custom}
                >
                    <GearFillIcon />
                    Custom content
                </div>
            </NotificationBanner>
        </div>
    );
}
