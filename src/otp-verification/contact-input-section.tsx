import { TickCircleFillIcon } from "@lifesg/react-icons";
import { FormErrorMessage } from "../form/form-label";
import { PhoneNumberInputValue } from "../phone-number-input";
import { VisuallyHidden } from "../shared/accessibility";
import {
    ContactButton,
    ContactButtonWrapper,
    ContactInputSectionWrapper,
    ContactInputWrapper,
    ContactSectionWrapper,
    EmailContactInput,
    PhoneContactInput,
    VerifiedIconWrapper,
} from "./contact-input-section-styles";
import { ContactInputSectionProps } from "./internal-types";
import { OtpVerifyType } from "./types";

export const ContactInputSection = ({
    id,
    "data-testid": dataTestId,
    disabled,
    readOnly,
    inputId,
    type,
    sendOtpPlaceholder,
    emailValue,
    onEmailChange,
    phoneNumberValue,
    onPhoneNumberChange,
    isLoading,
    isVerified,
    countdown,
    onSendOtp,
    onStateReset,
    sendOtpError,
}: ContactInputSectionProps) => {
    const handleContactInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        onStateReset();
        if (type === OtpVerifyType.EMAIL && onEmailChange) {
            onEmailChange(e.target.value);
        }
    };

    const handlePhoneInputChange = (value: PhoneNumberInputValue) => {
        onStateReset();
        if (type === OtpVerifyType.PHONE_NUMBER && onPhoneNumberChange) {
            onPhoneNumberChange(value);
        }
    };

    const renderContactInput = () => (
        <>
            {type === OtpVerifyType.EMAIL ? (
                <EmailContactInput
                    id={inputId}
                    data-testid={dataTestId ? `${dataTestId}-input` : undefined}
                    placeholder={sendOtpPlaceholder || "Enter email"}
                    value={emailValue || ""}
                    onChange={handleContactInputChange}
                    type="email"
                    noBorder
                    $error={!!sendOtpError}
                    $verified={isVerified}
                    aria-labelledby={id ? `${id}-label` : undefined}
                    aria-invalid={!!sendOtpError}
                    aria-required={true}
                />
            ) : (
                <PhoneContactInput
                    id={inputId}
                    data-testid={dataTestId ? `${dataTestId}-input` : undefined}
                    placeholder={sendOtpPlaceholder || "Enter mobile number"}
                    value={phoneNumberValue}
                    onChange={handlePhoneInputChange}
                    noBorder
                    fixedCountry
                    $error={!!sendOtpError}
                    $verified={isVerified}
                    aria-labelledby={id ? `${id}-label` : undefined}
                    aria-invalid={!!sendOtpError}
                    aria-required={true}
                />
            )}
        </>
    );

    const getContactButtonText = () => {
        if (isVerified) {
            return "Verified";
        }

        if (isLoading) {
            return "";
        }

        if (countdown.isRunning) {
            return "Sent OTP";
        }

        return "Send OTP";
    };

    return (
        <ContactSectionWrapper
            id={id}
            data-testid={dataTestId}
            role="group"
            aria-labelledby={id ? `${id}-label` : undefined}
        >
            <ContactInputSectionWrapper>
                <ContactInputWrapper $isMaxWidth={type === OtpVerifyType.EMAIL}>
                    {renderContactInput()}
                    {isVerified && (
                        <VerifiedIconWrapper
                            className="contact-verified-icon"
                            aria-label="Verified"
                            role="img"
                        >
                            <TickCircleFillIcon />
                        </VerifiedIconWrapper>
                    )}
                </ContactInputWrapper>
                <ContactButtonWrapper
                    $isVerified={isVerified}
                    $isCountdownRunning={countdown.isRunning}
                >
                    <ContactButton
                        id={id ? `${id}-button` : undefined}
                        data-testid={
                            dataTestId ? `${dataTestId}-button` : undefined
                        }
                        onClick={onSendOtp}
                        disabled={
                            disabled ||
                            readOnly ||
                            countdown.isRunning ||
                            isVerified
                        }
                        loading={isLoading}
                    >
                        {getContactButtonText()}
                    </ContactButton>
                </ContactButtonWrapper>
            </ContactInputSectionWrapper>
            {sendOtpError && (
                <FormErrorMessage
                    id={id ? `${id}-error` : undefined}
                    data-testid={dataTestId ? `${dataTestId}-error` : undefined}
                    role="alert"
                    aria-live="polite"
                >
                    {sendOtpError}
                </FormErrorMessage>
            )}
            {countdown.isRunning && (
                <VisuallyHidden
                    id={id ? `${id}-countdown` : undefined}
                    data-testid={
                        dataTestId ? `${dataTestId}-countdown` : undefined
                    }
                    aria-live="polite"
                    aria-atomic="true"
                >
                    Resend available in {countdown.formatTime()}
                </VisuallyHidden>
            )}
        </ContactSectionWrapper>
    );
};
