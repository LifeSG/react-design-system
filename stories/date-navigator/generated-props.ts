// AUTO-GENERATED — do not edit manually.
// Source: src/date-navigator/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const DateNavigatorPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "selectedDate",
                description: "The current displayed date in YYYY-MM-DD format.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "minDate",
                description:
                    "The minimum date allowed for navigation in YYYY-MM-DD format (inclusive).",
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date allowed for navigation in YYYY-MM-DD format (inclusive).",
                propTypes: ["string"],
            },
            {
                name: "loading",
                description:
                    "Disables navigation buttons while content is loading.",
                propTypes: ["boolean"],
            },
            {
                name: "showDateAsShortForm",
                description:
                    "Shows the date in short form (e.g. abbreviated month).",
                propTypes: ["boolean"],
            },
            {
                name: "showCurrentDateAsToday",
                description:
                    "Shows today's system date as 'Today' instead of the full date string.",
                propTypes: ["boolean"],
            },
            {
                name: "view",
                description:
                    'View type for navigation — `"day"` for a single day, `"week"` for a week range.',
                propTypes: ['"day"', '"week"'],
            },
            {
                name: "onLeftArrowClick",
                description:
                    "Called when the left arrow navigation button is clicked. Receives the current date string.",
                propTypes: ["(currentDate: string) => void"],
                mandatory: true,
            },
            {
                name: "onRightArrowClick",
                description:
                    "Called when the right arrow navigation button is clicked. Receives the current date string.",
                propTypes: ["(currentDate: string) => void"],
                mandatory: true,
            },
            {
                name: "onCalendarDateSelect",
                description:
                    "Called when a date is selected from the calendar dropdown. Receives the selected date string.",
                propTypes: ["((currentDate: string) => void) | undefined"],
            },
            {
                name: "dropdownRootNode",
                description:
                    "The root element that contains the dropdown element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the dropdown, the dropdown may not be visible. Specify the parent element here instead",
                propTypes: ["RefObject<HTMLElement>"],
            },
        ],
    },
];
