// AUTO-GENERATED — do not edit manually.
// Source: src/timetable/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimeTablePopoverPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "trigger",
                description: "The trigger type for showing the popover",
                propTypes: ["PopoverV2TriggerType"],
                mandatory: true,
            },
            {
                name: "content",
                description: "The content to display in the popover",
                propTypes: ["string", "JSX.Element", "(() => React.ReactNode)"],
                mandatory: true,
            },
            {
                name: "delay",
                description:
                    "Delay in milliseconds before opening/closing the popover",
                propTypes: [
                    "",
                    "{ open?: number | undefined; close?: number | undefined }",
                ],
            },
            {
                name: "offset",
                description:
                    "Offset distance of the popover from the trigger element",
                propTypes: ["number"],
            },
        ],
    },
];
