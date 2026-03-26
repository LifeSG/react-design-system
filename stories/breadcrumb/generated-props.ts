// AUTO-GENERATED — do not edit manually.
// Source: src/breadcrumb/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const BreadcrumbPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "links",
                description: "The links for the breadcrumbs",
                propTypes: ["React.AnchorHTMLAttributes<HTMLAnchorElement>[]"],
                mandatory: true,
            },
            {
                name: "fadeColor",
                description:
                    "When the breadcrumbs are too long, controls the color of the fade effect at the ends",
                propTypes: ["string[]", "FadeColorSet"],
            },
            {
                name: "fadePosition",
                description:
                    "When the breadcrumbs are too long, controls whether the fade effect is shown.",
                propTypes: ["FadePosition"],
                defaultValue: '"both"',
            },
            {
                name: "itemStyle",
                description:
                    "Custom style that can be passed to the `Breadcrumb` items",
                propTypes: ["string"],
            },
            {
                name: "separatorStyle",
                description: "Separator style between breadcrumb items.",
                propTypes: ["SeparatorStyle"],
                defaultValue: '"chevron"',
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
        ],
    },
];
