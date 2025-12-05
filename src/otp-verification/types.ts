import { BaseFormElementProps } from "src/form/types";
import { PhoneNumberInputValue } from "src/phone-number-input";
import { useCountdown } from "../util";

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
    disabled?: boolean;
    readOnly?: boolean;
}

// Email input specific props
export interface EmailInputProps {
    type: OtpVerifyType.EMAIL;
    emailValue?: string;
    onEmailChange?: (input: string) => void;
}

// Phone number input specific props
export interface PhoneNumberInputProps {
    type: OtpVerifyType.PHONE_NUMBER;
    phoneNumberValue?: PhoneNumberInputValue;
    onPhoneNumberChange?: (value: PhoneNumberInputValue) => void;
}

// Base contact input props (shared between email and phone)
export interface BaseContactInputProps {
    onSendOtp?: () => Promise<void>;
    sendOtpError?: string;
    sendOtpPlaceholder?: string;
}

// OTP input and verification props
export interface OtpInputProps {
    otpValue?: {
        prefix?: string;
        separator?: string;
        value?: string;
    };
    onVerifyOtp?: (input: string) => Promise<void>;
    verifyOtpCountdownTimer?: number;
    onResendOtp?: () => Promise<void>;
    verifyOtpError?: string;
    showVerifyOtpIcon?: boolean;
    verifyOtpIcon?: React.ReactNode;
    verifyOtpTitle?: string;
    verifyOtpMessage?: string;
}

// Combined props for email-based OTP verification
export type EmailOtpVerificationProps = BaseOtpVerificationProps &
    EmailInputProps &
    BaseContactInputProps &
    OtpInputProps;

// Combined props for phone-based OTP verification
export type PhoneOtpVerificationProps = BaseOtpVerificationProps &
    PhoneNumberInputProps &
    BaseContactInputProps &
    OtpInputProps;

// Union type for all OTP verification props
export type OtpVerificationProps =
    | EmailOtpVerificationProps
    | PhoneOtpVerificationProps;

// Form wrapper props (for Form.OtpVerification)
export interface FormOtpVerificationProps extends BaseFormElementProps {
    // Form element props
    id?: string;
    "data-testid"?: string;

    disabled?: boolean;
    readOnly?: boolean;

    // Contact input type (required)
    type: OtpVerifyType;

    // Email specific props (when type is "email")
    emailValue?: string | undefined;
    onEmailChange?: (input: string) => void;

    // Phone number specific props (when type is "phone-number")
    phoneNumberValue?: PhoneNumberInputValue;
    onPhoneNumberChange?: (value: PhoneNumberInputValue) => void;

    // Contact input props
    onSendOtp?: () => Promise<void>;
    sendOtpError?: string;
    sendOtpPlaceholder?: string;

    // OTP verification props
    otpValue?: {
        prefix?: string;
        separator?: string;
        value?: string;
    };
    onVerifyOtp?: (input: string) => Promise<void>;
    verifyOtpCountdownTimer?: number;
    onResendOtp?: () => Promise<void>;
    verifyOtpError?: string;
    showVerifyOtpIcon?: boolean;
    verifyOtpIcon?: React.ReactNode;
    verifyOtpTitle?: string;
    verifyOtpMessage?: string;
}

export interface ContactInputSectionProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean;
    readOnly?: boolean;
    type: OtpVerifyType;
    sendOtpPlaceholder?: string;
    sendOtpError?: string;
    emailValue?: string;
    onEmailChange?: (input: string) => void;
    phoneNumberValue?: PhoneNumberInputValue;
    onPhoneNumberChange?: (value: PhoneNumberInputValue) => void;
    isLoading: boolean;
    internalState: InternalOtpState;
    countdown: ReturnType<typeof useCountdown>;
    onSendOtp: () => void;
    onStateReset: () => void;
}

export interface VerificationSectionProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    type: OtpVerifyType;
    showVerifyOtpIcon?: boolean;
    verifyOtpTitle?: string;
    verifyOtpMessage?: string;
    verifyOtpError?: string;
    otpCode: string | undefined;
    setOtpCode: (value: string) => void;
    isVerifyLoading: boolean;
    countdown: ReturnType<typeof useCountdown>;
    onVerifyOtp: () => void;
}
