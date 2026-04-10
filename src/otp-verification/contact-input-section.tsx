import { TickCircleFillIcon } from "@lifesg/react-icons";
import { FormErrorMessage } from "../form/form-label";
import { CountryValue, PhoneNumberInputValue } from "../phone-number-input";
import {
    ContactButton,
    ContactInputSectionWrapper,
    ContactInputWrapper,
    ContactSectionWrapper,
    EmailContactInput,
    PhoneContactInput,
    VerifiedIconWrapper,
} from "./contact-input-section-styles";
import { ContactInputSectionProps } from "./internal-types";

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
    fixedCountry,
    isLoading,
    isVerified,
    countdown,
    onSendOtp,
    onStateReset,
    sendOtpError,
}: ContactInputSectionProps) => {
    const contactErrorId = id ? `${id}-contact-error` : undefined;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onStateReset();
        if (type === "email" && onEmailChange) {
            onEmailChange(e.target.value);
        }
    };

    const handlePhoneInputChange = (value: PhoneNumberInputValue) => {
        onStateReset();
        if (type === "phone-number" && onPhoneNumberChange) {
            onPhoneNumberChange(value);
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
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

    const getMobileAriaLabel = (country?: CountryValue) =>
        `Enter your ${
            country?.name ?? ""
        } mobile number to receive a verification OTP`.replace(/\s+/g, " ");

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContactInput = () =>
        type === "email" ? (
            <EmailContactInput
                id={inputId}
                data-testid={
                    dataTestId ? `${dataTestId}-contact-input` : undefined
                }
                placeholder={sendOtpPlaceholder || "Enter email"}
                value={emailValue}
                onChange={handleEmailInputChange}
                type="email"
                noBorder
                aria-invalid={!!sendOtpError}
                aria-required={true}
                aria-label="Enter your email address to receive a verification OTP"
                aria-describedby={sendOtpError ? contactErrorId : undefined}
                disabled={disabled}
                readOnly={readOnly}
            />
        ) : (
            <PhoneContactInput
                id={inputId}
                data-testid={
                    dataTestId ? `${dataTestId}-contact-input` : undefined
                }
                placeholder={sendOtpPlaceholder || "Enter mobile number"}
                value={phoneNumberValue}
                onChange={handlePhoneInputChange}
                noBorder
                fixedCountry={fixedCountry}
                aria-invalid={!!sendOtpError}
                aria-required={true}
                aria-describedby={sendOtpError ? contactErrorId : undefined}
                getAriaLabel={getMobileAriaLabel}
                disabled={disabled}
                readOnly={readOnly}
            />
        );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <ContactSectionWrapper id={id} data-testid={dataTestId}>
            <ContactInputSectionWrapper>
                <ContactInputWrapper
                    $isMaxWidth={type === "email"}
                    $error={!!sendOtpError}
                    $disabled={disabled}
                    $readonly={readOnly}
                >
                    {renderContactInput()}
                    {isVerified && (
                        <VerifiedIconWrapper aria-label="Verified" role="img">
                            <TickCircleFillIcon />
                        </VerifiedIconWrapper>
                    )}
                </ContactInputWrapper>
                {!disabled && !readOnly && (
                    <ContactButton
                        id={id ? `${id}-contact-button` : undefined}
                        type="button"
                        data-testid={
                            dataTestId
                                ? `${dataTestId}-contact-button`
                                : undefined
                        }
                        onClick={onSendOtp}
                        disabled={countdown.isRunning || isVerified}
                        loading={isLoading}
                    >
                        {getContactButtonText()}
                    </ContactButton>
                )}
            </ContactInputSectionWrapper>
            {sendOtpError && (
                <FormErrorMessage
                    id={contactErrorId}
                    data-testid={
                        dataTestId ? `${dataTestId}-contact-error` : undefined
                    }
                    role="alert"
                >
                    {sendOtpError}
                </FormErrorMessage>
            )}
        </ContactSectionWrapper>
    );
};
