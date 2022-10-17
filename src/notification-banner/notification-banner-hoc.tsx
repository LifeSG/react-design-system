import DOMPurify from "dompurify";
import React from "react";
import { NBComponent, NotificationBanner } from "./notification-banner";
import {
    ContentLinkAttributes,
    ContentTextAttributes,
    NotificationBannerWithForwardedRefProps,
    NotificationContentAttributes,
} from "./types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
