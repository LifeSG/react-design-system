import DOMPurify from "dompurify";
import React from "react";

import { NBComponent, NotificationBanner } from "./notification-banner";
import type {
    ContentLinkAttributes,
    ContentTextAttributes,
    NotificationBannerWithForwardedRefProps,
    NotificationContentAttributes,
} from "./types";

/**
 * Higher-order component that wraps `NotificationBanner` and renders its
 * content from a structured data array.
 * *
 * @param data Content items to render inside the banner.
 */
export const withNotificationBanner = (
    data: NotificationContentAttributes[]
) => {
    const ComponentToReturn = (
        props: NotificationBannerWithForwardedRefProps,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const renderContent = () => {
            if (data.length > 0) {
                return data.map((attribute, index) => {
                    if (attribute.type === "text") {
                        const otherAttributes =
                            attribute.otherAttributes as ContentTextAttributes;

                        const sanitizedContent = DOMPurify.sanitize(
                            attribute.content
                        );
                        return (
                            <p
                                key={index}
                                {...otherAttributes}
                                dangerouslySetInnerHTML={{
                                    __html: sanitizedContent,
                                }}
                            />
                        );
                    } else {
                        const otherAttributes =
                            attribute.otherAttributes as ContentLinkAttributes;
                        return (
                            <NotificationBanner.Link
                                key={index}
                                {...otherAttributes}
                            >
                                {attribute.content}
                            </NotificationBanner.Link>
                        );
                    }
                });
            }

            console.error("[NotificationBannerHOC] Empty data passed");
            return null;
        };

        return (
            <NBComponent forwardedRef={ref} {...props}>
                {renderContent()}
            </NBComponent>
        );
    };

    return React.forwardRef(ComponentToReturn);
};
