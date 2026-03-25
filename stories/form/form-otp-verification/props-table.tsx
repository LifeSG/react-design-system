import {
    ApiTable,
    ApiTableSectionProps,
    PropTableTabs,
} from "stories/storybook-common";
import {
    FORM_LABEL_ADDON_PROPS_DATA,
    FORM_LABEL_USED_WITH_WRAPPER_PROPS_DATA,
} from "../form-label/props-table";

const DATA: ApiTableSectionProps[] = [
    {
        name: "OtpVerification specific props",
        attributes: [
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "type",
                description: "The type of OTP verification",
                propTypes: [`"phone-number"`, `"email"`],
            },
            {
                name: "phoneNumberValue",
                description:
                    'The phone number value (required when type is "phone-number")',
                propTypes: ["PhoneNumberInputValue"],
            },
            {
                name: "onSendOtp",
                description: "Called when OTP is requested",
                propTypes: ["() => Promise<void>"],
            },
            {
                name: "onOtpChange",
                description: "Called when OTP input value changes",
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onVerifyOtp",
                description:
                    "Called when OTP verification request is submitted",
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
                propTypes: [`"default"`, `"sent"`, `"verified"`],
            },
            {
                name: "onOtpStateChange",
                description: "Called when OTP state changes",
                propTypes: ["(otpState: OtpVerificationState) => void"],
            },
            {
                name: "sendOtpError",
                description: "Error message for send OTP step",
                propTypes: ["string"],
            },
            {
                name: "sendOtpPlaceholder",
                description: "Placeholder text for the contact input field",
                propTypes: ["string"],
            },
            {
                name: "verifyOtpError",
                description: "Error message for verify OTP step",
                propTypes: ["string"],
            },
            {
                name: "verifyOtpTitle",
                description: "Title text for the verify OTP section",
                propTypes: ["string"],
            },
            {
                name: "verifyOtpMessage",
                description: "Description text for the verify OTP section",
                propTypes: ["string"],
            },
            {
                name: "showVerifyOtpThumbnail",
                description:
                    "Whether to show the thumbnail in verify OTP section",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "verifyOtpIcon",
                description: "Custom icon for the verify OTP section",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "otpValue",
                description:
                    "Current OTP input value with prefix and separator",
                propTypes: [
                    "{ prefix?: string; separator?: string; value?: string }",
                ],
            },
            {
                name: "verifyOtpCountdownTimer",
                description:
                    "Countdown timer in seconds before allowing resend",
                propTypes: ["number"],
                defaultValue: "60",
            },
        ],
    },
    {
        name: "Phone number specific props",
        attributes: [
            {
                name: "phoneNumberValue",
                description: "The country code and phone number",
                propTypes: ["PhoneNumberInputValue"],
            },
            {
                name: "onPhoneNumberChange",
                description: "Callback when the phone number value changes",
                propTypes: ["(value: PhoneNumberInputValue) => void"],
            },
            {
                name: "fixedCountry",
                description: "If true, the country code cannot be changed",
                propTypes: ["true"],
            },
        ],
    },
    {
        name: "PhoneNumberInputValue",
        attributes: [
            {
                name: "number",
                description: "The phone number value",
                propTypes: ["string"],
            },
            {
                name: "countryCode",
                description: "The country code value (e.g. +65)",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "Email specific props",
        attributes: [
            {
                name: "emailValue",
                description: "The email address value",
                propTypes: ["string"],
            },
            {
                name: "onEmailChange",
                description: "Callback when the email value changes",
                propTypes: ["(value: string) => void"],
            },
        ],
    },
    {
        name: "Form specific props",
        attributes: [
            {
                name: "label",
                description: "The label of the field",
                propTypes: ["FormLabelProps", "string"],
            },
        ],
    },
    {
        name: "FormLabelProps",
        ...FORM_LABEL_USED_WITH_WRAPPER_PROPS_DATA,
    },
    FORM_LABEL_ADDON_PROPS_DATA,
];

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "Form.OtpVerification",
                content: <ApiTable sections={DATA} />,
            },
        ]}
    />
);
