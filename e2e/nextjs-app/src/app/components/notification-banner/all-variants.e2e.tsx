"use client";
import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { NotificationBanner } from "@lifesg/react-design-system/notification-banner";

export default function Story() {
    return (
        <div className="story-column-container">
            <NotificationBanner data-testid="banner-default">
                This is a default notification banner
            </NotificationBanner>

            <NotificationBanner
                data-testid="banner-with-icon"
                icon={<PlaceholderIcon />}
            >
                This is a notification banner with an icon
            </NotificationBanner>

            <NotificationBanner
                data-testid="banner-non-dismissible"
                dismissible={false}
            >
                This is a non-dismissible notification banner
            </NotificationBanner>
        </div>
    );
}
