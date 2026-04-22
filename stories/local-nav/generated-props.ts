// AUTO-GENERATED — do not edit manually.
// Source: src/local-nav/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const LocalNavDropdownPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "defaultLabel",
                description: "Default label when no nav items are selected.",
                propTypes: ["string", "React.ReactNode"],
                mandatory: true,
            },
            {
                name: "stickyOffset",
                description: "The top offset when the dropdown is sticky.",
                propTypes: ["number"],
            },
            {
                name: "renderItem",
                description:
                    "Function to customise the rendering of the nav item.",
                propTypes: [
                    "",
                    "((\n              item: LocalNavItemProps,\n              renderProps: LocalNavDropdownItemRenderProps\n          ) => React.ReactNode)\n        | undefined",
                ],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "onNavItemSelect",
                description: "Called when the nav item is selected.",
                propTypes: [
                    "(\n        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,\n        item: LocalNavItemProps,\n        index: number\n    ) => void",
                ],
                mandatory: true,
            },
            {
                name: "items",
                description: "The nav items.",
                propTypes: ["LocalNavItemProps[]"],
                mandatory: true,
            },
            {
                name: "selectedItemIndex",
                description: "The current selected nav item index.",
                propTypes: ["number"],
            },
        ],
    },
];

export const LocalNavItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "Display title of the nav item.",
                propTypes: ["string", "React.ReactNode"],
                mandatory: true,
            },
            {
                name: "id",
                description: "Unique identifier of the nav item.",
                propTypes: ["string"],
            },
        ],
    },
];

export const LocalNavMenuPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "renderItem",
                description:
                    "Function to customise the rendering of the nav item.",
                propTypes: [
                    "",
                    "((\n              item: LocalNavItemProps,\n              renderProps: LocalNavMenuItemRenderProps\n          ) => React.ReactNode)\n        | undefined",
                ],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "onNavItemSelect",
                description: "Called when the nav item is selected.",
                propTypes: [
                    "(\n        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,\n        item: LocalNavItemProps,\n        index: number\n    ) => void",
                ],
                mandatory: true,
            },
            {
                name: "items",
                description: "The nav items.",
                propTypes: ["LocalNavItemProps[]"],
                mandatory: true,
            },
            {
                name: "selectedItemIndex",
                description: "The current selected nav item index.",
                propTypes: ["number"],
            },
        ],
    },
];
