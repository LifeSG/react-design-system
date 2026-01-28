import { TickCircleFillIcon } from "@lifesg/react-icons";
import { FormErrorMessage } from "../form/form-label";
import { PhoneNumberInputValue } from "../phone-number-input";
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
    isLoading,
    isVerified,
    countdown,
    onSendOtp,
    onStateReset,
    sendOtpError,
}: ContactInputSectionProps) => {
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
                fixedCountry
                aria-invalid={!!sendOtpError}
                aria-required={true}
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
                >
                    {renderContactInput()}
                    {isVerified && (
                        <VerifiedIconWrapper aria-label="Verified" role="img">
                            <TickCircleFillIcon />
                        </VerifiedIconWrapper>
                    )}
                </ContactInputWrapper>
                <ContactButton
                    id={id ? `${id}-contact-button` : undefined}
                    data-testid={
                        dataTestId ? `${dataTestId}-contact-button` : undefined
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
            </ContactInputSectionWrapper>
            {sendOtpError && (
                <FormErrorMessage
                    id={id ? `${id}-contact-error` : undefined}
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
