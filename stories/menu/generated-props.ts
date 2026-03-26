// AUTO-GENERATED — do not edit manually.
// Source: src/menu/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const MenuPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "menuContent",
                description: "The menu content inside this menu.",
                propTypes: ["FunctionComponentElement<MenuContentProps>"],
                mandatory: true,
            },
            {
                name: "children",
                description:
                    "The item to interact with to trigger the Popover.",
                propTypes: ['"data-testi'],
                mandatory: true,
            },
            {
                name: "trigger",
                description: "The trigger for the appearance of the Popover.",
                propTypes: [". */\n    subLabel?: string", "unde"],
                defaultValue: '"click"',
            },
            {
                name: "position",
                description:
                    "The visual position of the Popover in relation to its trigger.",
                propTypes: ["", "undefined;\n}\n\n/**\n * A navig"],
                defaultValue: '"top"',
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["element.\n *\n * @key"],
            },
            {
                name: "zIndex",
                description:
                    "The custom z-index of the Popover. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["t> {\n    /** Test i"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ['ata-testid"?: strin'],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: [""],
            },
            {
                name: "rootNode",
                description:
                    "The root element that contains the popover element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the popover, the popover may not be visible. Specify the parent element here instead",
                propTypes: [""],
            },
            {
                name: "customOffset",
                description:
                    "How much offset to apply for the popover (in px).",
                propTypes: [""],
                defaultValue: "16",
            },
            {
                name: "delay",
                description:
                    "How much delay (in milliseconds) for popover to appear/dismiss. Note: delay is not applied for `click` trigger.",
                propTypes: [""],
                defaultValue: "{ open: 0, close: 500 }",
            },
            {
                name: "enableFlip",
                description:
                    "Enables the Popover's flip behavior (vertically) when there is not enough space in the window's viewport for the specified position.",
                propTypes: [""],
                defaultValue: "true",
            },
            {
                name: "overflow",
                description:
                    "Controls how overflow content behaves inside the popover container. Used with `enableResize`.",
                propTypes: [""],
                defaultValue: '"auto"',
            },
            {
                name: "enableResize",
                description:
                    "Enables popover resize to fit the remaining vertical space of the window and contents become scrollable.",
                propTypes: [""],
                defaultValue: "false",
            },
            {
                name: "popoverAriaLabel",
                description: "The accessible label for the popover content.",
                propTypes: [""],
                defaultValue: '"More information"',
            },
            {
                name: "triggerOnFocus",
                description:
                    "Opens the popover when the trigger element receives keyboard focus (e.g. via Tab), instead of requiring a click.",
                propTypes: [""],
                defaultValue: "false",
            },
            {
                name: "isModal",
                description:
                    "Controls whether the popover behaves as a modal. When true, focus is trapped within the popover.",
                propTypes: [""],
                defaultValue: "true",
            },
            {
                name: "onPopoverAppear",
                description: "The callback when the Popover appears.",
                propTypes: [""],
            },
            {
                name: "onPopoverDismiss",
                description: "The callback when the Popover dismisses.",
                propTypes: [""],
            },
        ],
    },
];

export const MenuContentPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description:
                    "The menu sections inside this content. Must be one or more `Menu.Section` components.",
                propTypes: [
                    "",
                    "ReactElement<typeof MenuSection>",
                    "ReactElement<typeof MenuSection>[]",
                ],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
                defaultValue: '"menu-content"',
            },
            {
                name: "overflow",
                description:
                    "Controls how overflow content behaves inside the popover container.",
                propTypes: ['-content" */\n    "data-testid"?:'],
            },
            {
                name: "maxHeight",
                description:
                    "Maximum height (in pixels) allowed for the popover content.",
                propTypes: ["ReactElement<typeo"],
            },
        ],
    },
];

export const MenuSectionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description:
                    "The menu items or links inside this section. Must be one or more `Menu.Item` or `Menu.Link` components.",
                propTypes: ["MenuSectionItem", "MenuSectionItem[]"],
                mandatory: true,
            },
            {
                name: "showDivider",
                description:
                    "Specify if a divider is shown at the top of the section.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "label",
                description: "Optional label for this section.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
                defaultValue: '"menu-section"',
            },
        ],
    },
];

export const MenuItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "label",
                description: "Main text for the menu item.",
                propTypes: ["string"],
            },
            {
                name: "subLabel",
                description: "Secondary text for the menu item.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
                defaultValue: '"menu-item"',
            },
        ],
    },
];

export const MenuLinkPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
                defaultValue: '"menu-link"',
            },
        ],
    },
];
