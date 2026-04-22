// AUTO-GENERATED — do not edit manually.
// Source: src/box-container/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const BoxContainerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The content of the component",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "title",
                description: "The label text for the header",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "collapsible",
                description:
                    "Specifies if the contents can be collapsed or expanded.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "expanded",
                description:
                    "Specifies if contents are expanded. Only valid if `collapsible` is set to `true`.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "callToActionComponent",
                description: "A custom call to action component for the header",
                propTypes: ["JSX.Element"],
            },
            {
                name: "displayState",
                description:
                    "Specifies the display state which renders an icon.",
                propTypes: ["BoxContainerDisplayState"],
                defaultValue: '"default"',
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "subComponentTestIds",
                description:
                    "The id used for testing the label and handle button",
                propTypes: ["BoxContainerSubComponentTestIds"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "clickableHeader",
                description:
                    "Specifies if clicking on any part of the header expands or closes the contents",
                propTypes: ["boolean"],
            },
        ],
    },
];
