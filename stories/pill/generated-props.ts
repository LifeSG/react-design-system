// AUTO-GENERATED — do not edit manually.
// Source: src/pill/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const PillPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The display style of the Pill.",
                propTypes: ["PillType"],
                mandatory: true,
            },
            {
                name: "colorType",
                description: "The color scheme of the Pill.",
                propTypes: ["PillColorType"],
                defaultValue: '"black"',
            },
            {
                name: "icon",
                description:
                    "An optional icon element rendered before the label text.",
                propTypes: ["JSX.Element"],
            },
        ],
    },
];
