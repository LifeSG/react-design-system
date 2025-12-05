import { TickCircleFillIcon } from "@lifesg/react-icons";
import { FormErrorMessage } from "../form/form-label";
import { PhoneNumberInputValue } from "../phone-number-input";
import { VisuallyHidden } from "../shared/accessibility";
import {
    ContactButton,
    ContactButtonWrapper,
    ContactInputSectionWrapper,
    ContactInputWrapper,
    ContactLabel,
    ContactSectionWrapper,
    EmailContactInput,
    PhoneContactInput,
} from "./contact-input-section-styles";
import {
    ContactInputSectionProps,
    InternalOtpState,
    OtpVerifyType,
} from "./types";

export const ContactInputSection = ({
    id,
    "data-testid": dataTestId,
    disabled,
    readOnly,
    type,
    sendOtpPlaceholder,
    emailValue,
    onEmailChange,
    phoneNumberValue,
    onPhoneNumberChange,
    isLoading,
    internalState,
    countdown,
    onSendOtp,
    onStateReset,
    sendOtpError,
}: ContactInputSectionProps) => {
    const isVerified = internalState === InternalOtpState.VERIFIED;
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
                    id={`${id}-input`}
                    data-testid={`${dataTestId}-input`}
                    placeholder={sendOtpPlaceholder || "Enter email"}
                    value={emailValue || ""}
                    onChange={handleContactInputChange}
                    type="email"
                    noBorderWrapper
                    $error={!!sendOtpError}
                    $verified={isVerified}
                    aria-labelledby={`${id}-label`}
                    aria-invalid={!!sendOtpError}
                    aria-required={true}
                />
            ) : (
                <PhoneContactInput
                    id={`${id}-input`}
                    data-testid={`${dataTestId}-input`}
                    placeholder={sendOtpPlaceholder || "Enter mobile number"}
                    value={phoneNumberValue}
                    onChange={handlePhoneInputChange}
                    noBorderWrapper
                    fixedCountry
                    $error={!!sendOtpError}
                    aria-labelledby={`${id}-label`}
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
            aria-labelledby={`${id}-label`}
        >
            <ContactLabel
                id={`${id}-label`}
                data-testid={`${dataTestId}-label`}
            >
                {type === OtpVerifyType.EMAIL ? "Email" : "Mobile Number"}
            </ContactLabel>
            <ContactInputSectionWrapper>
                <ContactInputWrapper isMaxWidth={type === OtpVerifyType.EMAIL}>
                    {renderContactInput()}
                    {isVerified && (
                        <TickCircleFillIcon
                            className="verified-icon"
                            aria-label="Verified"
                            role="img"
                        />
                    )}
                </ContactInputWrapper>
                <ContactButtonWrapper
                    internalState={internalState}
                    isCountdownRunning={countdown.isRunning}
                >
                    <ContactButton
                        id={`${id}-button`}
                        data-testid={`${dataTestId}-button`}
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
                    id={`${id}-error`}
                    data-testid={`${dataTestId}-error`}
                    role="alert"
                    aria-live="polite"
                >
                    {sendOtpError}
                </FormErrorMessage>
            )}
            {countdown.isRunning && (
                <VisuallyHidden
                    id={`${id}-countdown`}
                    data-testid={`${dataTestId}-countdown`}
                    aria-live="polite"
                    aria-atomic="true"
                >
                    Resend available in {countdown.formatTime()}
                </VisuallyHidden>
            )}
        </ContactSectionWrapper>
    );
};
