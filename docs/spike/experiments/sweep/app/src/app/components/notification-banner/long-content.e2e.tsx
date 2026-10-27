"use client";
import { NotificationBanner } from "@lifesg/react-design-system/notification-banner";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";

export default function Story() {
    return (
        <div className="story-column-container">
            <NotificationBanner
                data-testid="banner-long-content"
                maxCollapsedHeight={100}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </NotificationBanner>

            <NotificationBanner
                data-testid="banner-long-content-action-button"
                maxCollapsedHeight={100}
                actionButton={{
                    children: (
                        <>
                            View more
                            <ArrowRightIcon />
                        </>
                    ),
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </NotificationBanner>
        </div>
    );
}
