import React from "react";
import { NotificationBannerWithForwardedRefProps, NotificationContentAttributes } from "./types";
export declare const withNotificationBanner: (data: NotificationContentAttributes[]) => (props: NotificationBannerWithForwardedRefProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
