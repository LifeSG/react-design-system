// AUTO-GENERATED — do not edit manually.
// Source: src/toggle/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TogglePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description:
                    'The type of toggle. Values: "checkbox" | "radio" | "yes" | "no" "checkbox" - allows deselection "radio", "yes", "no" - does not allow deselection. However they will determine the indicator to be displayed',
                propTypes: ["ToggleType"],
            },
            {
                name: "indicator",
                description:
                    "Specifies if the indicator icon should be displayed",
                propTypes: ["boolean"],
            },
            {
                name: "checked",
                description: "Indicates if the element is checked",
                propTypes: ["boolean"],
            },
            {
                name: "styleType",
                description:
                    'The style type of the Toggle. Values: "default" | "no-border"',
                propTypes: ["ToggleStyleType"],
            },
            {
                name: "children",
                description: "The Toggle label",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "childrenMaxLines",
                description:
                    "The number of lines visible. Additional lines will be truncated",
                propTypes: [
                    "",
                    "{\n              mobile?: number | undefined;\n              desktop?: number | undefined;\n              tablet?: number | undefined;\n          }",
                ],
            },
            {
                name: "subLabel",
                description: "",
                propTypes: [
                    "(() => JSX.Element) | JSX.Element | string | undefined",
                ],
            },
            {
                name: "disabled",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: "Specifies if the error display should be present",
                propTypes: ["boolean"],
            },
            {
                name: "className",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "name",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description: "",
                propTypes: [
                    "",
                    "((event: React.ChangeEvent<HTMLInputElement>) => void)\n        | undefined",
                ],
            },
            {
                name: "compositeSection",
                description: "The Toggle subsection",
                propTypes: ["ToggleCompositeSectionProps"],
            },
            {
                name: "removable",
                description:
                    "Specifies if the remove button should be displayed",
                propTypes: ["boolean"],
            },
            {
                name: "onRemove",
                description: "",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "useContentWidth",
                description: "Changes min-width to fit content",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const ToggleCompositeSectionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "collapsible",
                description: "Specifies if the subsection is collapsible",
                propTypes: ["boolean"],
            },
            {
                name: "initialExpanded",
                description:
                    "The initial expanded state. Only applicable if collapsible",
                propTypes: ["boolean"],
            },
            {
                name: "errors",
                description:
                    "Specifies errors to be displayed when the subsection is collapsed",
                propTypes: ["string[]", "JSX.Element"],
            },
        ],
    },
];
