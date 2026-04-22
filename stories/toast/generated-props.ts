// AUTO-GENERATED — do not edit manually.
// Source: src/toast/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const ToastPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The type of Toast. Control the display",
                propTypes: ["ToastType"],
                mandatory: true,
            },
            {
                name: "label",
                description:
                    "The content of the Toast. If a `title` is provided, this will act as a description label",
                propTypes: ["string", "React.ReactNode"],
                mandatory: true,
            },
            {
                name: "title",
                description: "The title of the Toast",
                propTypes: ["string", "React.ReactNode"],
            },
            {
                name: "autoDismiss",
                description:
                    "If specified, the Toast will be automatically dismissed after 4 seconds",
                propTypes: ["boolean"],
            },
            {
                name: "autoDismissTime",
                description:
                    "Time until auto dismissal in milliseconds. Requires `autoDismiss` to be `true`",
                propTypes: ["number"],
            },
            {
                name: "onDismiss",
                description:
                    "If given, the function will be called when the Toast is dismissed",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "fixed",
                description:
                    "Specifies if Toast should be fixed to top. Defaults to true",
                propTypes: ["boolean"],
            },
            {
                name: "actionButton",
                description:
                    "If given, will display an actionButton with the given title and run the given function upon clicking of the button",
                propTypes: ["ToastActionButtonProps"],
            },
        ],
    },
];

export const ToastActionButtonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "label",
                description: "The label of the action button.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "onClick",
                description: "Called when the action button is clicked.",
                propTypes: ["() => void"],
                mandatory: true,
            },
        ],
    },
];
