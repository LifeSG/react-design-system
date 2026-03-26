// AUTO-GENERATED — do not edit manually.
// Source: src/badge/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const BadgePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "badgeOffset",
                description:
                    "Offsets the badge relative to the top right corner. Expects `[left, top]` CSS length values.",
                propTypes: ["[string, string]"],
            },
            {
                name: "children",
                description:
                    "Content to display with the badge positioned in the corner.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "count",
                description:
                    "The number to display inside the badge. Applies to number-based badge variants only.",
                propTypes: ["number"],
            },
            {
                name: "variant",
                description: "Specifies the visual style of the badge.",
                propTypes: ["BadgeVariant"],
                defaultValue: '"number"',
            },
            {
                name: "color",
                description: "Defines the visual color tone of the badge.",
                propTypes: ["BadgeColor"],
                defaultValue: '"default"',
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
                defaultValue: '"badge"',
            },
        ],
    },
];
