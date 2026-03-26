// AUTO-GENERATED — do not edit manually.
// Source: src/drawer/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const DrawerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The content rendered inside the drawer body.",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "className",
                description: "CSS class selector for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique id attribute for the component.",
                propTypes: ["string"],
            },
            {
                name: "heading",
                description: "The header text of the Drawer.",
                propTypes: ["string"],
            },
            {
                name: "show",
                description: "Toggles the visibility of the Drawer.",
                propTypes: ["boolean"],
            },
            {
                name: "onClose",
                description: "Called when the close button is clicked.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onOverlayClick",
                description: "Called when the backdrop overlay is clicked.",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];
