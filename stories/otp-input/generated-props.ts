// AUTO-GENERATED — do not edit manually.
// Source: src/otp-input/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const OtpInputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
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
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "value",
                description: "The array of input values",
                propTypes: ["string[]"],
            },
            {
                name: "errorMessage",
                description:
                    "Indicates if an error message is to be displayed.",
                propTypes: ["string", "React.ReactNode"],
            },
            {
                name: "cooldownDuration",
                description:
                    "The duration (in seconds) to disable the submit button after a click is made",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "actionButtonProps",
                description: "The props for the submit button",
                propTypes: ["ButtonProps"],
            },
            {
                name: "otpOnly",
                description:
                    "Flag to indicate if only OTP inputs should be rendered without the action button",
                propTypes: ["boolean"],
            },
            {
                name: "numOfInput",
                description: "The number of characters for the Otp",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "prefix",
                description: "",
                propTypes: [
                    "",
                    '{\n              /** Optional OTP prefix, usually consisting of a few alphabetic characters */\n              value: string;\n              /** separator between prefix and otp digits. Only "-" supported for now */\n              separator: "-";\n          }',
                ],
            },
            {
                name: "onChange",
                description:
                    "Called when one of the input is changed. Returns an array of all the input values",
                propTypes: ["((value: string[]) => void) | undefined"],
            },
            {
                name: "onCountdownChange",
                description:
                    "Called when the countdown changes. Returns the remaining time in seconds",
                propTypes: ["((remaining: number) => void) | undefined"],
            },
            {
                name: "onCooldownStart",
                description: "Called when the cooldown begins",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onCooldownEnd",
                description: "Called when the cooldown ends",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];
