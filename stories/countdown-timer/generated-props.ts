// AUTO-GENERATED — do not edit manually.
// Source: src/countdown-timer/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const CountdownTimerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "timer",
                description:
                    "Specifies the countdown timer duration (in seconds)",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "timestamp",
                description:
                    "Not used in this variant; provide `timer` instead.",
                propTypes: ["number"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "show",
                description: "Specifies to start the countdown timer",
                propTypes: ["boolean"],
                mandatory: true,
            },
            {
                name: "fixed",
                description:
                    "Specifies if the component should be sticky when scrolled out of view.",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "notifyTimer",
                description:
                    "Specifies the notification threshold timer (in seconds)",
                propTypes: ["number"],
            },
            {
                name: "offset",
                description:
                    "Specifies the sticky position in desktop and tablet. Note: values are pixel-based.",
                propTypes: ["Offset"],
                defaultValue: "{ top: 168 }",
            },
            {
                name: "mobileOffset",
                description:
                    "Specifies the sticky position in mobile. Note: values are pixel-based.",
                propTypes: ["MobileOffset"],
                defaultValue: "{ top: 80 }",
            },
            {
                name: "align",
                description:
                    "Specifies if the sticky component is aligned to its left or right.",
                propTypes: ["AlignPosition"],
                defaultValue: '"right"',
            },
            {
                name: "onTick",
                description:
                    "Called every interval when the timer value becomes equal to or less than `notifyTimer`. Note: due to browser limitations, it is not guaranteed to run precisely every second.",
                propTypes: ["((seconds: number) => void) | undefined"],
            },
            {
                name: "onNotify",
                description:
                    "Called when the timer value becomes less than `notifyTimer`",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onFinish",
                description: "Called when the timer value reaches zero",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "reminderInterval",
                description:
                    "Specifies the interval (in seconds) for polite screen reader reminders.",
                propTypes: ["number"],
                defaultValue: "120",
            },
        ],
    },
];
