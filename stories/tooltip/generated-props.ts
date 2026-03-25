// AUTO-GENERATED — do not edit manually.
// Source: src/tooltip/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TooltipHOCPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "tooltipVisible",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "position",
                description:
                    'The position of the tooltip. Values: "top" | "bottom" | "left" | "right"',
                propTypes: ["TooltipPosition"],
            },
        ],
    },
];

export const TooltipHOCOptionsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "content",
                description: "",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
        ],
    },
];
