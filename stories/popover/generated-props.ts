// AUTO-GENERATED — do not edit manually.
// Source: src/popover/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const PopoverHOCPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "onPopoverAppear",
                description: "",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onPopoverDismiss",
                description: "",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];

export const PopoverHOCOptionsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "content",
                description: "",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "trigger",
                description: "",
                propTypes: ['"click"', '"hover"'],
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
        ],
    },
];
