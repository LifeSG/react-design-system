import { BaseFormElementProps } from "src/form/types";
import { PhoneNumberInputValue } from "../phone-number-input";

export enum InternalOtpState {
    DEFAULT = "default",
    SENT = "sent",
    VERIFIED = "verified",
}

export enum OtpVerifyType {
    EMAIL = "email",
    PHONE_NUMBER = "phone-number",
}

// Base props for OTP verification component
export interface BaseOtpVerificationProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    className?: string | undefined;
    inputId?: string | undefined;
}

// Email input specific props
export interface OtpVerificationEmailInputProps {
    type: OtpVerifyType.EMAIL;
    emailValue?: string | undefined;
    onEmailChange?: ((input: string) => void) | undefined;
}

// Phone number input specific props
export interface OtpVerificationPhoneNumberInputProps {
    type: OtpVerifyType.PHONE_NUMBER;
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;
}

// Base contact input props (shared between email and phone)
export interface OtpVerificationContactInputProps {
    onSendOtp?: (() => Promise<void>) | undefined;
    sendOtpError?: string | undefined;
    sendOtpPlaceholder?: string | undefined;
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
    showVerifyOtpIcon?: boolean | undefined;
    verifyOtpIcon?: React.ReactNode | undefined;
    verifyOtpTitle?: string | undefined;
    verifyOtpMessage?: string | undefined;
}

// Combined props for email-based OTP verification
export type EmailOtpVerificationProps = BaseOtpVerificationProps &
    OtpVerificationEmailInputProps &
    OtpVerificationContactInputProps &
    OtpVerificationInputProps;

// Combined props for phone-based OTP verification
export type PhoneOtpVerificationProps = BaseOtpVerificationProps &
    OtpVerificationPhoneNumberInputProps &
    OtpVerificationContactInputProps &
    OtpVerificationInputProps;

// Union type for all OTP verification props
export type OtpVerificationProps =
    | EmailOtpVerificationProps
    | PhoneOtpVerificationProps;

// Form wrapper props (for Form.OtpVerification)
export interface FormOtpVerificationProps extends BaseFormElementProps {
    // Form element props
    id?: string | undefined;
    "data-testid"?: string | undefined;

    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;

    // Contact input type (required)
    type: OtpVerifyType;

    // Email specific props (when type is "email")
    emailValue?: string | undefined;
    onEmailChange?: ((input: string) => void) | undefined;

    // Phone number specific props (when type is "phone-number")
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;

    // Contact input props
    onSendOtp?: (() => Promise<void>) | undefined;
    sendOtpError?: string | undefined;
    sendOtpPlaceholder?: string | undefined;

    // OTP verification props
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
