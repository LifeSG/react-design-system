import { TickCircleFillIcon } from "@lifesg/react-icons";
import { FormErrorMessage } from "../form/form-label";
import { PhoneNumberInputValue } from "../phone-number-input";
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
                    placeholder={sendOtpPlaceholder || "Enter email"}
                    value={emailValue || ""}
                    onChange={handleContactInputChange}
                    type="email"
                    noBorderWrapper
                    $error={!!sendOtpError}
                    $verified={isVerified}
                />
            ) : (
                <PhoneContactInput
                    placeholder={sendOtpPlaceholder || "Enter mobile number"}
                    value={phoneNumberValue}
                    onChange={handlePhoneInputChange}
                    noBorderWrapper
                    $error={!!sendOtpError}
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
        <ContactSectionWrapper>
            <ContactLabel>
                {type === OtpVerifyType.EMAIL ? "Email" : "Mobile Number"}
            </ContactLabel>
            <ContactInputSectionWrapper>
                <ContactInputWrapper>
                    {renderContactInput()}
                    {isVerified && (
                        <TickCircleFillIcon className="verified-icon" />
                    )}
                </ContactInputWrapper>
                <ContactButtonWrapper
                    internalState={internalState}
                    isCountdownRunning={countdown.isRunning}
                >
                    <ContactButton
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
                <FormErrorMessage>{sendOtpError}</FormErrorMessage>
            )}
        </ContactSectionWrapper>
    );
};
