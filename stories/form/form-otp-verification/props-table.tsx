import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "OtpVerification specific props",
        attributes: [
            {
                name: "type",
                description:
                    "The type of OTP verification (phone number or email)",
                propTypes: ['"phone-number" | "email"'],
            },
            {
                name: "phoneNumberValue",
                description:
                    'The phone number value (required when type is "phone-number")',
                propTypes: ["PhoneNumberInputValue"],
            },
            {
                name: "emailValue",
                description: 'The email value (required when type is "email")',
                propTypes: ["string"],
            },
            {
                name: "onPhoneNumberChange",
                description: "Called when phone number input changes",
                propTypes: ["(value: PhoneNumberInputValue) => void"],
            },
            {
                name: "onEmailChange",
                description: "Called when email input changes",
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onSendOtp",
                description: "Called when sending OTP is requested",
                propTypes: ["() => Promise<void>"],
            },
            {
                name: "onVerifyOtp",
                description: "Called when OTP verification is submitted",
                propTypes: ["(otp: string) => Promise<void>"],
            },
            {
                name: "onResendOtp",
                description: "Called when OTP resend is requested",
                propTypes: ["() => Promise<void>"],
            },
            {
                name: "otpState",
                description: "Current state of the OTP verification process",
                propTypes: ["OtpVerificationState"],
            },
            {
                name: "onOtpStateChange",
                description: "Called when OTP state changes",
                propTypes: ["(state: OtpVerificationState) => void"],
            },
            {
                name: "isLoading",
                description: "Whether the send OTP operation is in progress",
                propTypes: ["boolean"],
            },
            {
                name: "onLoadingChange",
                description: "Called when loading state changes",
                propTypes: ["(loading: boolean) => void"],
            },
            {
                name: "isVerifyLoading",
                description: "Whether the verify OTP operation is in progress",
                propTypes: ["boolean"],
            },
            {
                name: "onVerifyLoadingChange",
                description: "Called when verify loading state changes",
                propTypes: ["(loading: boolean) => void"],
            },
            {
                name: "sendOtpError",
                description: "Error message for send OTP step",
                propTypes: ["string"],
            },
            {
                name: "verifyOtpError",
                description: "Error message for verify OTP step",
                propTypes: ["string"],
            },
            {
                name: "verifyOtpTitle",
                description: "Title text for the verify OTP step",
                propTypes: ["string"],
            },
            {
                name: "verifyOtpMessage",
                description: "Message text for the verify OTP step",
                propTypes: ["string"],
            },
            {
                name: "showVerifyOtpThumbnail",
                description: "Whether to show the icon in verify OTP step",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "verifyOtpCountdownTimer",
                description:
                    "Countdown timer in seconds before allowing resend",
                propTypes: ["number"],
                defaultValue: "60",
            },
            {
                name: "otpLength",
                description: "Number of OTP input fields",
                propTypes: ["number"],
                defaultValue: "6",
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "OtpVerificationState",
        attributes: [
            {
                name: "DEFAULT",
                description: "Initial state - contact input is shown",
                propTypes: ["enum value"],
            },
            {
                name: "OTP_SENT",
                description: "OTP has been sent - verification input is shown",
                propTypes: ["enum value"],
            },
            {
                name: "VERIFIED",
                description: "OTP has been successfully verified",
                propTypes: ["enum value"],
            },
        ],
    },
    {
        name: "PhoneNumberInputValue",
        attributes: [
            {
                name: "number",
                description: "The value of the phone number",
                propTypes: ["string"],
            },
            {
                name: "countryCode",
                description: "The value of the country code (e.g. +65)",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
