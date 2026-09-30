import React from "react";
import type { NotificationBannerWithForwardedRefProps, NotificationContentAttributes } from "./types";
/**
 * Higher-order component that wraps `NotificationBanner` and renders its
 * content from a structured data array.
 * *
 * @param data Content items to render inside the banner.
 */
export declare const withNotificationBanner: (data: NotificationContentAttributes[]) => (props: NotificationBannerWithForwardedRefProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
