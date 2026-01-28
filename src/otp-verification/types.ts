import { BaseFormElementProps } from "src/form/types";
import { PhoneNumberInputValue } from "../phone-number-input";

export type OtpVerificationState = "default" | "sent" | "verified";

// Base props for OTP verification component
export interface BaseOtpVerificationProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    className?: string | undefined;
    inputId?: string | undefined;
    otpState: OtpVerificationState;
    onOtpStateChange: (state: OtpVerificationState) => void;
    onSendOtp?: (() => Promise<void>) | undefined;
    sendOtpError?: string | undefined;
    sendOtpPlaceholder?: string | undefined;
}

// Email input specific props
export interface OtpVerificationEmailInputProps {
    type: "email";
    emailValue?: string | undefined;
    onEmailChange?: ((input: string) => void) | undefined;
}

// Phone number input specific props
export interface OtpVerificationPhoneNumberInputProps {
    type: "phone-number";
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;
}

// OTP input and verification props
export interface OtpVerificationInputProps {
    otpValue?:
        | {
              prefix?: string | undefined;
              separator?: string | undefined;
              value?: string | undefined;
          }
        | undefined;
    onOtpChange?: ((value: string) => void) | undefined;
    onVerifyOtp?: ((input: string) => Promise<void>) | undefined;
    verifyOtpCountdownTimer?: number | undefined;
    onResendOtp?: (() => Promise<void>) | undefined;
    verifyOtpError?: string | undefined;
    showVerifyOtpThumbnail?: boolean | undefined;
    verifyOtpIcon?: React.ReactNode | undefined;
    verifyOtpTitle?: string | undefined;
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
