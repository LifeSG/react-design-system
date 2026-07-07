"use client";
import { NotificationBanner } from "@lifesg/react-design-system/notification-banner";

export default function Story() {
    return (
        <div className="story-column-container">
            <NotificationBanner data-testid="banner-text-styling">
                This banner has <strong>bold text</strong>, <em>italic text</em>
                , anchor tag for normal{" "}
                <a href="https://sample-url.com">link</a>, and Link component
                for{" "}
                <NotificationBanner.Link href="https://sample-url.com" external>
                    external link
                </NotificationBanner.Link>
                .
            </NotificationBanner>
        </div>
    );
}
