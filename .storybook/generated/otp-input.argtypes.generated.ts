// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const otpInputExtraArgTypes = {
    "OtpInputProps.id": {
        name: "id",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "OtpInputProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "OtpInputProps.className": {
        name: "className",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "OtpInputProps.value": {
        name: "value",
        description: "The array of input values",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "OtpInputProps.errorMessage": {
        name: "errorMessage",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "OtpInputProps.cooldownDuration": {
        name: "cooldownDuration",
        description:
            "The duration (in seconds) to disable the submit button after a click is made",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "number",
            },
        },
    },
    "OtpInputProps.actionButtonProps": {
        name: "actionButtonProps",
        description: "The props for the submit button",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "OtpInputProps.otpOnly": {
        name: "otpOnly",
        description:
            "Flag to indicate if only OTP inputs should be rendered without the action button",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "OtpInputProps.numOfInput": {
        name: "numOfInput",
        description: "The number of characters for the Otp",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "number",
            },
        },
    },
    "OtpInputProps.prefix": {
        name: "prefix",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary:
                    '| { /** Optional OTP prefix, usually consisting of a few alphabetic characters */ value: string; /** separator between prefix and otp digits. Only "-" supported for now */ separator: "-"; }',
            },
        },
    },
    "OtpInputProps.onChange": {
        name: "onChange",
        description:
            "Called when one of the input is changed. Returns an array of all the input values",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "((value: string[]) => void)",
            },
        },
    },
    "OtpInputProps.onCountdownChange": {
        name: "onCountdownChange",
        description:
            "Called when the countdown changes. Returns the remaining time in seconds",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "((remaining: number) => void)",
            },
        },
    },
    "OtpInputProps.onCooldownStart": {
        name: "onCooldownStart",
        description: "Called when the cooldown begins",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "OtpInputProps.onCooldownEnd": {
        name: "onCooldownEnd",
        description: "Called when the cooldown ends",
        control: false,
        table: {
            category: "OtpInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    OtpInputRef: {
        name: "OtpInputRef",
        control: false,
        table: {
            category: "OtpInputRef",
            type: {
                summary: "{ startCooldown: () => void; }",
            },
        },
    },
} satisfies Record<string, unknown>;
