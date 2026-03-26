// AUTO-GENERATED — do not edit manually.
// Source: src/modal/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const ModalPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                description: "Toggles the visibility of the Modal.",
                propTypes: ["boolean"],
                mandatory: true,
            },
            {
                name: "children",
                description: "The content to render inside the modal.",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "animationFrom",
                description:
                    'Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right"',
                propTypes: ["ModalAnimationDirection"],
            },
            {
                name: "enableOverlayClick",
                description:
                    "Toggles whether the Modal can be dismissed by clicking on the overlay.",
                propTypes: ["boolean"],
            },
            {
                name: "rootComponentId",
                description:
                    "The identifier of the element to inject the Modal into",
                propTypes: ["string"],
            },
            {
                name: "zIndex",
                description:
                    "Allows a custom z-index to be specified (useful for modal stacking).",
                propTypes: ["number"],
            },
            {
                name: "onOverlayClick",
                description:
                    "Callback when the overlay is clicked. Triggered if `enableOverlayClick` is true.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "dismissKeyboardOnShow",
                description: "Dismiss keyboard to keep modal in fullscreen",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const ModalBoxPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The content to render inside the modal box.",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "showCloseButton",
                description: "Toggles the visibility of the close button.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "onClose",
                description:
                    "Callback when the close button is clicked. Triggered if the close button is visible.",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];
