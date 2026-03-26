// AUTO-GENERATED — do not edit manually.
// Source: src/time-slot-bar/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimeSlotBarPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "variant",
                description:
                    'The display variant of the component. Values: "minified" | "default"',
                propTypes: ["TimeSlotBarVariant"],
            },
            {
                name: "startTime",
                description:
                    "The start time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "endTime",
                description:
                    "The end time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "initialScrollTime",
                description:
                    'Initial scroll position in HH:mm format (e.g., "09:00" will scroll to 9am on mount)',
                propTypes: ["string"],
            },
            {
                name: "slots",
                description: "The time slots for the TimeSlotBar.",
                propTypes: ["TimeSlot[]"],
                mandatory: true,
            },
            {
                name: "onSlotClick",
                description:
                    "Callback function when user clicks on the time slot",
                propTypes: ["(timeSlot: TimeSlot) => void"],
                mandatory: true,
            },
            {
                name: "onClick",
                description:
                    "The default click behaviour when no time slot is specified for the time period",
                propTypes: ["() => void"],
            },
            {
                name: "styleAttributes",
                description:
                    "The default styling attributes when no time slot is specified for the time period",
                propTypes: ["TimeSlotBarStyleAttributes"],
            },
            {
                name: "roundInitialScrollTime",
                description:
                    "Rounds initial scroll time to the nearest interval, e.g 6:30 will be clamped to 6:00 when interval = 60. Default is true",
                propTypes: ["boolean"],
            },
        ],
    },
];
