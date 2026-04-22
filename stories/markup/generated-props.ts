// AUTO-GENERATED — do not edit manually.
// Source: src/markup/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const MarkupPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "baseTextSize",
                description:
                    "The default font size. If not specified, inherited from the parent.",
                propTypes: ["TypographySizeType"],
            },
            {
                name: "baseTextColor",
                description:
                    "The default font color. Supports theming. If not specified, inherited from the parent.",
                propTypes: [
                    "string",
                    "((props: ThemeStyleProps) => string) | undefined",
                ],
            },
            {
                name: "inline",
                description:
                    "Specifies if element is rendered as block element `div` or inline element `span`",
                propTypes: ["boolean"],
            },
        ],
    },
];
