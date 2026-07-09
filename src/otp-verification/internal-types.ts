import type { PhoneNumberInputValue } from "../phone-number-input";
import type { useCountdown } from "../util";

export interface ContactInputSectionProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-describedby"?: string | undefined;
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
    fixedCountry: true;
    isLoading: boolean;
    isVerified: boolean;
    countdown: ReturnType<typeof useCountdown>;
    onSendOtp: () => void;
    onStateReset: () => void;
}

export interface VerificationSectionProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;

    countdown: ReturnType<typeof useCountdown>;
    isVerifyLoading: boolean;
    otpCode?: string | undefined;
    otpPrefix?: string | undefined;
    otpSeparator?: string | undefined;
    type: "email" | "phone-number";
    /**
     * Whether to display the thumbnail image in the OTP verification section,
     * visible in the `"sent"` state.
     */
    showVerifyOtpThumbnail?: boolean | undefined;
    /**
     * Custom icon in the OTP verification section, visible in the `"sent"` state.
     */
    verifyOtpIcon?: React.ReactNode | undefined;
    /**
     * Custom heading in the OTP verification section, visible in the `"sent"` state.
     */
    verifyOtpTitle?: string | undefined;
    /**
     * Custom body text in the OTP verification section, visible in the `"sent"` state.
     */
    verifyOtpMessage?: string | undefined;
    /**
     * Error message displayed below the OTP input after a failed verification attempt.
     */
    verifyOtpError?: string | undefined;

    setOtpCode?: (value: string) => void;
    onVerifyOtp: () => void;
}
