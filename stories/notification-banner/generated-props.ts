// AUTO-GENERATED — do not edit manually.
// Source: src/notification-banner/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const NotificationBannerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The content of the banner.",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "dismissible",
                description:
                    "Specifies if the NotificationBanner can be dismissed.",
                propTypes: ["boolean"],
            },
            {
                name: "visible",
                description:
                    "Specifies if the NotificationBanner is to be displayed.",
                propTypes: ["boolean"],
            },
            {
                name: "sticky",
                description:
                    "Specifies if the NotificationBanner is to remain displayed at the top of the page even though a scroll has happened.",
                propTypes: ["boolean"],
            },
            {
                name: "icon",
                description:
                    "Specifies the icon to be displayed in the banner. If not specified, no icon will be displayed.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "onDismiss",
                description: "Called when the NotificationBanner is dismissed.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "maxCollapsedHeight",
                description:
                    "Specifies the maximum visible height of the NotificationBanner content, after which it is collapsed.",
                propTypes: ["number"],
            },
            {
                name: "actionButton",
                description:
                    "The properties of the action button that appears at the bottom of the component.",
                propTypes: ["React.ButtonHTMLAttributes<HTMLButtonElement>"],
            },
        ],
    },
];
