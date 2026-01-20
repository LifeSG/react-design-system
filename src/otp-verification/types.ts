import { BaseFormElementProps } from "src/form/types";
import { PhoneNumberInputValue } from "../phone-number-input";

export enum OtpVerificationState {
    DEFAULT = "default",
    SENT = "sent",
    VERIFIED = "verified",
}

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
    isLoading: boolean;
    onLoadingChange: (loading: boolean) => void;
    isVerifyLoading: boolean;
    onVerifyLoadingChange: (loading: boolean) => void;
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

// Base form props shared between email and phone
export interface BaseFormOtpVerificationProps extends BaseFormElementProps {
    // Form element props
    id?: string | undefined;
    "data-testid"?: string | undefined;

    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;

    otpState: OtpVerificationState;
    onOtpStateChange: (state: OtpVerificationState) => void;
    isLoading: boolean;
    onLoadingChange: (loading: boolean) => void;
    isVerifyLoading: boolean;
    onVerifyLoadingChange: (loading: boolean) => void;

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

// Form wrapper props for email-based OTP verification
export interface FormEmailOtpVerificationProps
    extends BaseFormOtpVerificationProps {
    type: "email";
    emailValue?: string | undefined;
    onEmailChange?: ((input: string) => void) | undefined;
}

// Form wrapper props for phone-based OTP verification
export interface FormPhoneOtpVerificationProps
    extends BaseFormOtpVerificationProps {
    type: "phone-number";
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;
}

// Union type for all form OTP verification props
export type FormOtpVerificationProps =
    | FormEmailOtpVerificationProps
    | FormPhoneOtpVerificationProps;
