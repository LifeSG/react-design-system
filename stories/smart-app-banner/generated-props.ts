// AUTO-GENERATED — do not edit manually.
// Source: src/smart-app-banner/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const SmartAppBannerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                description: "Controls whether the banner is visible.",
                propTypes: ["boolean"],
                mandatory: true,
            },
            {
                name: "href",
                description:
                    "The destination URL when the banner body is tapped.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "content",
                description:
                    "The content displayed in the banner (title, button label, star rating).",
                propTypes: ["SmartAppBannerContentProps"],
                mandatory: true,
            },
            {
                name: "offset",
                description:
                    "The CSS `top` offset in pixels when the banner is sticky.",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "icon",
                description:
                    "URL of the app icon image displayed on the left side.",
                propTypes: ["string"],
            },
            {
                name: "animated",
                description:
                    "When `true`, adds a slide-down animation on first appearance.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "className",
                description: "CSS class selector for the component.",
                propTypes: ["string"],
            },
            {
                name: "onDismiss",
                description:
                    "Called when the user taps the dismiss (×) button.",
                propTypes: ["() => void"],
                mandatory: true,
            },
            {
                name: "onClick",
                description:
                    "Called when the user taps the banner (non-dismiss area). Opens the link in a new tab by default.",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];

export const SmartAppBannerContentPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "buttonLabel",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "buttonAriaLabel",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "message",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "numberOfStars",
                description: "",
                propTypes: ["number"],
                mandatory: true,
            },
        ],
    },
];
