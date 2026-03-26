import { BaseFormElementProps } from "src/form/types";
import { PhoneNumberInputValue } from "../phone-number-input";

export type OtpVerificationState = "default" | "sent" | "verified";

/**
 * Base props shared by all OTP verification variants.
 *
 * @keywords otp, one-time-password, verification, authentication, send-otp
 */
export interface BaseOtpVerificationProps {
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Disables user interaction with the component. */
    disabled?: boolean | undefined;
    /** Makes the component read-only, preventing user input. */
    readOnly?: boolean | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Identifier for the inner input element. */
    inputId?: string | undefined;
    /** The current state of the OTP flow. */
    otpState: OtpVerificationState;
    /** Callback fired when the OTP state changes. */
    onOtpStateChange: (state: OtpVerificationState) => void;
    /** Async callback fired when the user requests an OTP to be sent. */
    onSendOtp?: (() => Promise<void>) | undefined;
    /** Error message displayed when sending the OTP fails. */
    sendOtpError?: string | undefined;
    /** Placeholder text for the contact input field shown before OTP is sent. */
    sendOtpPlaceholder?: string | undefined;
}

/**
 * Props for the email-based contact input variant of OTP verification.
 *
 * @keywords otp, email, verification, contact-input
 */
export interface OtpVerificationEmailInputProps {
    /** Discriminator that selects the email input variant. */
    type: "email";
    /** The current email address value. */
    emailValue?: string | undefined;
    /** Callback fired when the email address changes. */
    onEmailChange?: ((input: string) => void) | undefined;
}

/**
 * Props for the phone-number-based contact input variant of OTP verification.
 *
 * @keywords otp, phone, phone-number, verification, contact-input
 */
export interface OtpVerificationPhoneNumberInputProps {
    /** Discriminator that selects the phone number input variant. */
    type: "phone-number";
    /** The current phone number value. */
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    /** Callback fired when the phone number changes. */
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    /** When `true`, locks the country code selection to a single country. */
    fixedCountry: true;
}

/**
 * Props related to the OTP input field and the verification step.
 *
 * @keywords otp, verify, input, countdown, resend
 */
export interface OtpVerificationInputProps {
    /** Configuration for the OTP code input field, including optional prefix and separator. */
    otpValue?:
        | {
              prefix?: string | undefined;
              separator?: string | undefined;
              value?: string | undefined;
          }
        | undefined;
    /** Callback fired when the OTP code input changes. */
    onOtpChange?: ((value: string) => void) | undefined;
    /** Async callback fired when the user submits the OTP code for verification. */
    onVerifyOtp?: ((input: string) => Promise<void>) | undefined;
    /** Duration in seconds for the resend countdown timer after an OTP is sent. */
    verifyOtpCountdownTimer?: number | undefined;
    /** Async callback fired when the user requests the OTP to be resent. */
    onResendOtp?: (() => Promise<void>) | undefined;
    /** Error message displayed when OTP verification fails. */
    verifyOtpError?: string | undefined;
    /** When `true`, displays a thumbnail image in the verified success state. */
    showVerifyOtpThumbnail?: boolean | undefined;
    /** Custom icon displayed in the verified success state. */
    verifyOtpIcon?: React.ReactNode | undefined;
    /** Heading text displayed in the verified success state. */
    verifyOtpTitle?: string | undefined;
    /** Body text displayed in the verified success state. */
    verifyOtpMessage?: string | undefined;
}

// Combined props for email-based OTP verification
export type EmailOtpVerificationProps = BaseOtpVerificationProps &
    OtpVerificationEmailInputProps &
    OtpVerificationInputProps;

// Combined props for phone-based OTP verification
export type PhoneOtpVerificationProps = BaseOtpVerificationProps &
    OtpVerificationPhoneNumberInputProps &
    OtpVerificationInputProps;

// Union type for all OTP verification props
export type OtpVerificationProps =
    | EmailOtpVerificationProps
    | PhoneOtpVerificationProps;

// Form wrapper props for email-based OTP verification
export interface FormEmailOtpVerificationProps
    extends EmailOtpVerificationProps,
        Omit<BaseFormElementProps, "errorMessage"> {}

// Form wrapper props for phone-based OTP verification
export interface FormPhoneOtpVerificationProps
    extends PhoneOtpVerificationProps,
        Omit<BaseFormElementProps, "errorMessage"> {}

// Union type for all form OTP verification props
export type FormOtpVerificationProps =
    | FormEmailOtpVerificationProps
    | FormPhoneOtpVerificationProps;
