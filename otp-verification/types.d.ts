import type { BaseFormElementProps } from "../form/types";
import type { PhoneNumberInputValue } from "../phone-number-input";
export type OtpVerificationState = "default" | "sent" | "verified";
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
export interface OtpVerificationEmailInputProps {
    type: "email";
    emailValue?: string | undefined;
    onEmailChange?: ((input: string) => void) | undefined;
}
export interface OtpVerificationPhoneNumberInputProps {
    type: "phone-number";
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    fixedCountry: true;
}
export interface OtpVerificationInputProps {
    otpValue?: {
        prefix?: string | undefined;
        separator?: string | undefined;
        value?: string | undefined;
    } | undefined;
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
export type EmailOtpVerificationProps = BaseOtpVerificationProps & OtpVerificationEmailInputProps & OtpVerificationInputProps;
export type PhoneOtpVerificationProps = BaseOtpVerificationProps & OtpVerificationPhoneNumberInputProps & OtpVerificationInputProps;
export type OtpVerificationProps = EmailOtpVerificationProps | PhoneOtpVerificationProps;
export interface FormEmailOtpVerificationProps extends EmailOtpVerificationProps, Omit<BaseFormElementProps, "errorMessage"> {
}
export interface FormPhoneOtpVerificationProps extends PhoneOtpVerificationProps, Omit<BaseFormElementProps, "errorMessage"> {
}
export type FormOtpVerificationProps = FormEmailOtpVerificationProps | FormPhoneOtpVerificationProps;
