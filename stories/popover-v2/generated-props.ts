// AUTO-GENERATED — do not edit manually.
// Source: src/popover-v2/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const PopoverV2TriggerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description:
                    "The item to interact with to trigger the Popover.",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "popoverContent",
                description:
                    "The content of the Popover. Can be a string, JSX.Element, or a function that receives PopoverRenderProps.",
                propTypes: [
                    "",
                    "string",
                    "JSX.Element",
                    "((renderProps: PopoverRenderProps) => React.ReactNode)",
                ],
                mandatory: true,
            },
            {
                name: "trigger",
                description: "The trigger for the appearance of the Popover.",
                propTypes: ["PopoverV2TriggerType"],
                defaultValue: '"click"',
            },
            {
                name: "position",
                description:
                    "The visual position of the Popover in relation to its trigger.",
                propTypes: ["PopoverV2Position"],
                defaultValue: '"top"',
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "zIndex",
                description:
                    "The custom z-index of the Popover. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["number"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "rootNode",
                description:
                    "The root element that contains the popover element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the popover, the popover may not be visible. Specify the parent element here instead",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "customOffset",
                description:
                    "How much offset to apply for the popover (in px).",
                propTypes: ["number"],
                defaultValue: "16",
            },
            {
                name: "delay",
                description:
                    "How much delay (in milliseconds) for popover to appear/dismiss. Note: delay is not applied for `click` trigger.",
                propTypes: [
                    "",
                    "{ open?: number | undefined; close?: number | undefined }",
                ],
                defaultValue: "{ open: 0, close: 500 }",
            },
            {
                name: "enableFlip",
                description:
                    "Enables the Popover's flip behavior (vertically) when there is not enough space in the window's viewport for the specified position.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "overflow",
                description:
                    "Controls how overflow content behaves inside the popover container. Used with `enableResize`.",
                propTypes: ["PopoverOverflowType"],
                defaultValue: '"auto"',
            },
            {
                name: "enableResize",
                description:
                    "Enables popover resize to fit the remaining vertical space of the window and contents become scrollable.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "popoverAriaLabel",
                description: "The accessible label for the popover content.",
                propTypes: ["string"],
                defaultValue: '"More information"',
            },
            {
                name: "triggerOnFocus",
                description:
                    "Opens the popover when the trigger element receives keyboard focus (e.g. via Tab), instead of requiring a click.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "isModal",
                description:
                    "Controls whether the popover behaves as a modal. When true, focus is trapped within the popover.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "onPopoverAppear",
                description: "The callback when the Popover appears.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onPopoverDismiss",
                description: "The callback when the Popover dismisses.",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];

export const PopoverInlinePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "ariaLabel",
                description:
                    "The accessible label for the inline trigger element.",
                propTypes: ["string"],
            },
            {
                name: "content",
                description:
                    "The text content to display as an inline trigger.",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "icon",
                description: "The icon to display as an inline trigger.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "underlineStyle",
                description: "The underline style of the inline trigger.",
                propTypes: ["PopoverInlineStyle"],
            },
            {
                name: "underlineHoverStyle",
                description:
                    "The underline style of the inline trigger on hover.",
                propTypes: ["PopoverInlineStyle"],
            },
            {
                name: "popoverContent",
                description:
                    "The content of the Popover. Can be a string, JSX.Element, or a function that receives PopoverRenderProps.",
                propTypes: [
                    "",
                    "string",
                    "JSX.Element",
                    "((renderProps: PopoverRenderProps) => React.ReactNode)",
                ],
                mandatory: true,
            },
            {
                name: "trigger",
                description: "The trigger for the appearance of the Popover.",
                propTypes: ["PopoverV2TriggerType"],
                defaultValue: '"click"',
            },
            {
                name: "position",
                description:
                    "The visual position of the Popover in relation to its trigger.",
                propTypes: ["PopoverV2Position"],
                defaultValue: '"top"',
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "zIndex",
                description:
                    "The custom z-index of the Popover. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["number"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "rootNode",
                description:
                    "The root element that contains the popover element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the popover, the popover may not be visible. Specify the parent element here instead",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "customOffset",
                description:
                    "How much offset to apply for the popover (in px).",
                propTypes: ["number"],
                defaultValue: "16",
            },
            {
                name: "delay",
                description:
                    "How much delay (in milliseconds) for popover to appear/dismiss. Note: delay is not applied for `click` trigger.",
                propTypes: [
                    "",
                    "{ open?: number | undefined; close?: number | undefined }",
                ],
                defaultValue: "{ open: 0, close: 500 }",
            },
            {
                name: "enableFlip",
                description:
                    "Enables the Popover's flip behavior (vertically) when there is not enough space in the window's viewport for the specified position.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "overflow",
                description:
                    "Controls how overflow content behaves inside the popover container. Used with `enableResize`.",
                propTypes: ["PopoverOverflowType"],
                defaultValue: '"auto"',
            },
            {
                name: "enableResize",
                description:
                    "Enables popover resize to fit the remaining vertical space of the window and contents become scrollable.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "popoverAriaLabel",
                description: "The accessible label for the popover content.",
                propTypes: ["string"],
                defaultValue: '"More information"',
            },
            {
                name: "triggerOnFocus",
                description:
                    "Opens the popover when the trigger element receives keyboard focus (e.g. via Tab), instead of requiring a click.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "isModal",
                description:
                    "Controls whether the popover behaves as a modal. When true, focus is trapped within the popover.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "onPopoverAppear",
                description: "The callback when the Popover appears.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onPopoverDismiss",
                description: "The callback when the Popover dismisses.",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];
