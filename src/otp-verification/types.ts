import type { BaseFormElementProps } from "../form/types";
import type { PhoneNumberInputValue } from "../phone-number-input";
import type { VerificationSectionProps } from "./internal-types";

/**
 * Lifecycle state of the OTP verification flow.
 *
 * - `"default"` — initial state; the contact input is displayed.
 * - `"sent"` — OTP has been dispatched; the OTP entry and verification section appears.
 * - `"verified"` — OTP was successfully verified; the success confirmation is displayed.
 */
export type OtpVerificationState = "default" | "sent" | "verified";

/**
 * Base props shared by all variants of the `OtpVerification` component.
 */
export interface BaseOtpVerificationProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    className?: string | undefined;
    /**
     * The `id` attribute applied to the contact input field.
     */
    inputId?: string | undefined;
    /**
     * The current step in the OTP verification flow.
     * Controls which sections are rendered.
     */
    otpState: OtpVerificationState;
    /**
     * Called when the component transition to a new `otpState`.
     */
    onOtpStateChange: (state: OtpVerificationState) => void;
    /**
     * Called when the user initiates sending the OTP.
     * On resolution, the component transitions to `"sent"`.
     *
     * @remarks a rejection is silently swallowed. The consumer must use `sendOtpError` to show feedback
     */
    onSendOtp?: (() => Promise<void>) | undefined;
    /**
     * Error message displayed below the contact input after a failed attempt.
     */
    sendOtpError?: string | undefined;
    /**
     * Placeholder text for the contact input field.
     */
    sendOtpPlaceholder?: string | undefined;
    /**
     * Interval in seconds at which an accessibility announcement is made,
     * reminding the user how many seconds remain before they can resend the OTP.
     *
     * @default 120
     */
    otpReminderInterval?: number | undefined;
}

/**
 * Email-specific props for `OtpVerification`.
 */
export interface OtpVerificationEmailInputProps {
    /**
     * Discriminant that sets the contact input to email mode.
     */
    type: "email";
    /**
     * Controlled value of the email input.
     */
    emailValue?: string | undefined;
    /**
     * Called when the email input value changes.
     */
    onEmailChange?: ((input: string) => void) | undefined;
}

/**
 * Phone-number-specific props for `OtpVerification`.
 */
export interface OtpVerificationPhoneNumberInputProps {
    /**
     * Discriminant that sets the contact input to phone number mode.
     */
    type: "phone-number";
    /**
     * Controlled value of the phone number input.
     */
    phoneNumberValue?: PhoneNumberInputValue | undefined;
    /**
     * Called when the phone number input value changes.
     */
    onPhoneNumberChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    /**
     * Always `true`; the country selector is locked and cannot be changed by the user.
     */
    fixedCountry: true;
}

/**
 * Props for controlling the OTP input field and verification step.
 */
export interface OtpVerificationInputProps
    extends Pick<
        VerificationSectionProps,
        | "showVerifyOtpThumbnail"
        | "verifyOtpIcon"
        | "verifyOtpTitle"
        | "verifyOtpMessage"
        | "verifyOtpError"
    > {
    /**
     * Controlled state of the OTP input field.
     */
    otpValue?:
        | {
              /**
               * Static text displayed before the OTP input.
               */
              prefix?: string | undefined;
              /**
               * Character displayed between the `prefix` and OTP input..
               */
              separator?: string | undefined;
              /**
               * The current OTP string entered by the user.
               */
              value?: string | undefined;
          }
        | undefined;
    /**
     * Called when the OTP input value changes.
     *
     * @param value The full OTP string without prefix or separators.
     */
    onOtpChange?: ((value: string) => void) | undefined;
    /**
     * Called when the user submits the OTP for verification.
     * On resolution the component transitions to `"verified"`.
     *
     * @param input The current OTP string.
     *
     * @remarks a rejection is silently swallowed. The consumer must use `verifyOtpError` to show feedback
     */
    onVerifyOtp?: ((input: string) => Promise<void>) | undefined;
    /**
     * Duration in seconds of the resend cooldown after an OTP is sent.
     *
     * @default 60
     */
    verifyOtpCountdownTimer?: number | undefined;
    /**
     * Called when the user requests to resend the OTP from the verification step.
     */
    onResendOtp?: (() => Promise<void>) | undefined;
}

/**
 * Combined props for email-based OTP verification.
 */
export type EmailOtpVerificationProps = BaseOtpVerificationProps &
    OtpVerificationEmailInputProps &
    OtpVerificationInputProps;

/**
 * Combined props for phone-number-based OTP verification.
 */
export type PhoneOtpVerificationProps = BaseOtpVerificationProps &
    OtpVerificationPhoneNumberInputProps &
    OtpVerificationInputProps;

/**
 * Props for `OtpVerification` component.
 */
export type OtpVerificationProps =
    | EmailOtpVerificationProps
    | PhoneOtpVerificationProps;

/**
 * Props for the `Form.OtpVerification` email variant, extending
 * `EmailOtpVerificationProps` with form field layout metadata such as label
 * and hint text.
 */
export interface FormEmailOtpVerificationProps
    extends EmailOtpVerificationProps,
        Omit<BaseFormElementProps, "errorMessage"> {}

/**
 * Props for the `Form.OtpVerification` phone-number variant, extending
 * `PhoneOtpVerificationProps` with form field layout metadata such as label
 * and hint text.
 */
export interface FormPhoneOtpVerificationProps
    extends PhoneOtpVerificationProps,
        Omit<BaseFormElementProps, "errorMessage"> {}

/**
 * Props for the `Form.OtpVerification` component.
 */
export type FormOtpVerificationProps =
    | FormEmailOtpVerificationProps
    | FormPhoneOtpVerificationProps;
