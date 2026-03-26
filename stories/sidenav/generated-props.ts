// AUTO-GENERATED — do not edit manually.
// Source: src/sidenav/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const SidenavPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "fixed",
                description:
                    "Specifies if sidenav should be fixed to left. Defaults to true",
                propTypes: ["boolean"],
            },
            {
                name: "children",
                description: "<Sidenav.Group> ... </Sidenav.Group>",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "aria-label",
                description: "the accessible label",
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
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
        ],
    },
];

export const SidenavGroupPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "separator",
                description: "Specifies if bottom divider will be rendered",
                propTypes: ["boolean"],
            },
            {
                name: "children",
                description: "<Sidenav.Item> ... </Sidenav.Item>",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "aria-label",
                description: "the accessible label",
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
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
        ],
    },
];

export const SidenavItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "Display title of the item.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "icon",
                description: "The icon to be rendered",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "selected",
                description: "Indicates if an item is initially selected",
                propTypes: ["boolean"],
            },
            {
                name: "onClick",
                description: "Called when item is selected",
                propTypes: ["((id: string | undefined) => void) | undefined"],
            },
            {
                name: "children",
                description: "<Sidenav.DrawerItem> ... </Sidenav.DrawerItem>",
                propTypes: ["React.ReactNode"],
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
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
        ],
    },
];

export const SidenavDrawerItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "Display title of the item.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "children",
                description:
                    "<Sidenav.DrawerSubitem> ... </Sidenav.DrawerSubitem>",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "onClick",
                description: "Called when item is selected",
                propTypes: ["((id: string | undefined) => void) | undefined"],
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
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
        ],
    },
];

export const SidenavDrawerSubitemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "Display title of the item.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "onClick",
                description: "Called when item is selected",
                propTypes: ["((id: string | undefined) => void) | undefined"],
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
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
        ],
    },
];
