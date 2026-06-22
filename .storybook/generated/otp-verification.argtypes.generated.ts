// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const otpVerificationExtraArgTypes = {
    "BaseOtpVerificationProps.id": {
        name: "id",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseOtpVerificationProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseOtpVerificationProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "BaseOtpVerificationProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "BaseOtpVerificationProps.className": {
        name: "className",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseOtpVerificationProps.inputId": {
        name: "inputId",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseOtpVerificationProps.otpState": {
        name: "otpState",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "OtpVerificationState",
            },
        },
    },
    "BaseOtpVerificationProps.onOtpStateChange": {
        name: "onOtpStateChange",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "(state: OtpVerificationState) => void",
            },
        },
    },
    "BaseOtpVerificationProps.onSendOtp": {
        name: "onSendOtp",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "(() => Promise<void>)",
            },
        },
    },
    "BaseOtpVerificationProps.sendOtpError": {
        name: "sendOtpError",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseOtpVerificationProps.sendOtpPlaceholder": {
        name: "sendOtpPlaceholder",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseOtpVerificationProps.otpReminderInterval": {
        name: "otpReminderInterval",
        control: false,
        table: {
            category: "BaseOtpVerificationProps",
            type: {
                summary: "number",
            },
        },
    },
    "OtpVerificationEmailInputProps.type": {
        name: "type",
        control: false,
        table: {
            category: "OtpVerificationEmailInputProps",
            type: {
                summary: '"email"',
            },
        },
    },
    "OtpVerificationEmailInputProps.emailValue": {
        name: "emailValue",
        control: false,
        table: {
            category: "OtpVerificationEmailInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "OtpVerificationEmailInputProps.onEmailChange": {
        name: "onEmailChange",
        control: false,
        table: {
            category: "OtpVerificationEmailInputProps",
            type: {
                summary: "((input: string) => void)",
            },
        },
    },
    "OtpVerificationPhoneNumberInputProps.type": {
        name: "type",
        control: false,
        table: {
            category: "OtpVerificationPhoneNumberInputProps",
            type: {
                summary: '"phone-number"',
            },
        },
    },
    "OtpVerificationPhoneNumberInputProps.phoneNumberValue": {
        name: "phoneNumberValue",
        control: false,
        table: {
            category: "OtpVerificationPhoneNumberInputProps",
            type: {
                summary: "PhoneNumberInputValue",
            },
        },
    },
    "OtpVerificationPhoneNumberInputProps.onPhoneNumberChange": {
        name: "onPhoneNumberChange",
        control: false,
        table: {
            category: "OtpVerificationPhoneNumberInputProps",
            type: {
                summary: "((value: PhoneNumberInputValue) => void)",
            },
        },
    },
    "OtpVerificationPhoneNumberInputProps.fixedCountry": {
        name: "fixedCountry",
        control: false,
        table: {
            category: "OtpVerificationPhoneNumberInputProps",
            type: {
                summary: "true",
            },
        },
    },
    "OtpVerificationInputProps.otpValue": {
        name: "otpValue",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary:
                    "| { prefix?: string; separator?: string; value?: string; }",
            },
        },
    },
    "OtpVerificationInputProps.onOtpChange": {
        name: "onOtpChange",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "OtpVerificationInputProps.onVerifyOtp": {
        name: "onVerifyOtp",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "((input: string) => Promise<void>)",
            },
        },
    },
    "OtpVerificationInputProps.verifyOtpCountdownTimer": {
        name: "verifyOtpCountdownTimer",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "number",
            },
        },
    },
    "OtpVerificationInputProps.onResendOtp": {
        name: "onResendOtp",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "(() => Promise<void>)",
            },
        },
    },
    "OtpVerificationInputProps.verifyOtpError": {
        name: "verifyOtpError",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "OtpVerificationInputProps.showVerifyOtpThumbnail": {
        name: "showVerifyOtpThumbnail",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "OtpVerificationInputProps.verifyOtpIcon": {
        name: "verifyOtpIcon",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "OtpVerificationInputProps.verifyOtpTitle": {
        name: "verifyOtpTitle",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "OtpVerificationInputProps.verifyOtpMessage": {
        name: "verifyOtpMessage",
        control: false,
        table: {
            category: "OtpVerificationInputProps",
            type: {
                summary: "string",
            },
        },
    },
    OtpVerificationState: {
        name: "OtpVerificationState",
        control: false,
        table: {
            category: "OtpVerificationState",
            type: {
                summary: '"default" | "sent" | "verified"',
            },
        },
    },
    EmailOtpVerificationProps: {
        name: "EmailOtpVerificationProps",
        control: false,
        table: {
            category: "EmailOtpVerificationProps",
            type: {
                summary:
                    "BaseOtpVerificationProps & OtpVerificationEmailInputProps & OtpVerificationInputProps",
            },
        },
    },
    PhoneOtpVerificationProps: {
        name: "PhoneOtpVerificationProps",
        control: false,
        table: {
            category: "PhoneOtpVerificationProps",
            type: {
                summary:
                    "BaseOtpVerificationProps & OtpVerificationPhoneNumberInputProps & OtpVerificationInputProps",
            },
        },
    },
    OtpVerificationProps: {
        name: "OtpVerificationProps",
        control: false,
        table: {
            category: "OtpVerificationProps",
            type: {
                summary:
                    "| EmailOtpVerificationProps | PhoneOtpVerificationProps",
            },
        },
    },
    FormOtpVerificationProps: {
        name: "FormOtpVerificationProps",
        control: false,
        table: {
            category: "FormOtpVerificationProps",
            type: {
                summary:
                    "| FormEmailOtpVerificationProps | FormPhoneOtpVerificationProps",
            },
        },
    },
} satisfies Record<string, unknown>;
