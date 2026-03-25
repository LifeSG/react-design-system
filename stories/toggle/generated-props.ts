// AUTO-GENERATED — do not edit manually.
// Source: src/toggle/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

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
