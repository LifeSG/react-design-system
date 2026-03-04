import { TickCircleFillIcon } from "@lifesg/react-icons";
import { FormErrorMessage } from "../form/form-label";
import { PhoneNumberInputValue } from "../phone-number-input";
import { PhoneNumberInputHelper } from "../phone-number-input/phone-number-input-helper";
import { VisuallyHidden } from "../shared/accessibility";
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

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getPhoneCountryName = (countryCode: string | undefined): string => {
    if (!countryCode) return "";
    const code = countryCode.replace("+", "");
    const country = PhoneNumberInputHelper.getCountries().find(
        (c) => c.countryCode === code
    );
    return country?.name ?? "";
};

const formatCountryCode = (countryCode: string | undefined): string => {
    if (!countryCode) return "";
    return countryCode.startsWith("+") ? countryCode : `+${countryCode}`;
};

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
    const renderContactInput = () => {
        const countryCodeId = id ? `${id}-country-code` : undefined;

        return type === "email" ? (
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
                aria-label="Enter your email address to receive a verification OTP"
                aria-invalid={!!sendOtpError}
                aria-required={true}
                disabled={disabled}
                readOnly={readOnly}
            />
        ) : (
            <>
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
                    aria-label={`Enter your ${getPhoneCountryName(
                        phoneNumberValue?.countryCode
                    )} mobile number to receive a verification OTP`}
                    aria-describedby={countryCodeId}
                    aria-invalid={!!sendOtpError}
                    aria-required={true}
                    disabled={disabled}
                    readOnly={readOnly}
                />
                {countryCodeId && (
                    <VisuallyHidden id={countryCodeId} aria-hidden={false}>
                        {formatCountryCode(phoneNumberValue?.countryCode)}
                    </VisuallyHidden>
                )}
            </>
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const groupLabelId = id ? `${id}-contact-group-label` : undefined;

    return (
        <ContactSectionWrapper id={id} data-testid={dataTestId}>
            <ContactInputSectionWrapper
                role="group"
                aria-labelledby={groupLabelId}
            >
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
                        data-testid={
                            dataTestId
                                ? `${dataTestId}-contact-button`
                                : undefined
                        }
                        onClick={onSendOtp}
                        aria-hidden={"true"}
                        disabled={countdown.isRunning || isVerified}
                        loading={isLoading}
                    >
                        {getContactButtonText()}
                    </ContactButton>
                )}
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
