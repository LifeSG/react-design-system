// AUTO-GENERATED — do not edit manually.
// Source: src/modal-v2/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const ModalV2PropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
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
                defaultValue: "true",
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
                name: "onClose",
                description:
                    "Callback when the modal is closed. Can be triggered by the close button or pressing the Escape key.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onOverlayClick",
                description:
                    "Callback when the overlay outside of the modal is clicked. Triggered if `enableOverlayClick` is true.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "dismissKeyboardOnShow",
                description: "Dismiss keyboard to keep modal in fullscreen",
                propTypes: ["boolean"],
            },
            {
                name: "disableInitialFocus",
                description:
                    "Disable initial focus on the modal when it is shown",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const ModalCardPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "children",
                description: "The content to render inside the modal card.",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
        ],
    },
];

export const ModalCloseButtonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
        ],
    },
];

export const ModalContentPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "children",
                description:
                    "The content to render inside the modal content area.",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
        ],
    },
];

export const ModalFooterPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "primaryButton",
                description: "The primary call-to-action button.",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "secondaryButton",
                description: "The secondary call-to-action button.",
                propTypes: ["React.ReactNode"],
            },
        ],
    },
];
