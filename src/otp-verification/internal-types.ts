import { PhoneNumberInputValue } from "../phone-number-input";
import { useCountdown } from "../util";

export interface ContactInputSectionProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    inputId?: string | undefined;
    type: "email" | "phone-number";
    sendOtpPlaceholder?: string | undefined;
    sendOtpError?: string | undefined;
    emailValue?: string | undefined;
    onEmailChange?: ((input: string) => void) | undefined;
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    isLoading: boolean;
    isVerified: boolean;
    countdown: ReturnType<typeof useCountdown>;
    onSendOtp: () => void;
    onStateReset: () => void;
}

export interface VerificationSectionProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    type: "email" | "phone-number";
    showVerifyOtpThumbnail?: boolean | undefined;
    verifyOtpTitle?: string | undefined;
    verifyOtpMessage?: string | undefined;
    verifyOtpError?: string | undefined;
    otpCode: string | undefined;
    setOtpCode?: (value: string) => void;
    isVerifyLoading: boolean;
    countdown: ReturnType<typeof useCountdown>;
    onVerifyOtp: () => void;
}
