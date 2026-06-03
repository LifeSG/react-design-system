import { TickCircleFillIcon } from "@lifesg/react-icons";
import clsx from "clsx";

import { Button } from "../button";
import { FormErrorMessage } from "../form/form-label";
import { InputGroup } from "../input-group";
import type {
    CountryValue,
    PhoneNumberInputValue,
} from "../phone-number-input";
import { PhoneNumberInput } from "../phone-number-input";
import { concatIds } from "../shared/accessibility";
import * as styles from "./contact-input-section.styles";
import type { ContactInputSectionProps } from "./internal-types";

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
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
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
            <InputGroup
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
                aria-labelledby={ariaLabelledBy}
                aria-describedby={concatIds(
                    sendOtpError ? contactErrorId : undefined,
                    ariaDescribedBy
                )}
                disabled={disabled}
                readOnly={readOnly}
                className={clsx(
                    styles.emailContactInput,
                    disabled && styles.emailContactInputDisabled,
                    readOnly && styles.emailContactInputReadonly
                )}
            />
        ) : (
            <PhoneNumberInput
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
                getAriaLabel={getMobileAriaLabel}
                aria-labelledby={ariaLabelledBy}
                aria-describedby={concatIds(
                    sendOtpError ? contactErrorId : undefined,
                    ariaDescribedBy
                )}
                disabled={disabled}
                readOnly={readOnly}
                className={clsx(
                    styles.phoneContactInput,
                    disabled && styles.phoneContactInputDisabled,
                    readOnly && styles.phoneContactInputReadonly
                )}
            />
        );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <div
            id={id}
            data-testid={dataTestId}
            className={styles.contactSectionWrapper}
        >
            <div className={styles.contactInputSectionWrapper}>
                <div
                    data-max-width={type === "email"}
                    className={clsx(
                        styles.contactInputWrapper,
                        !!sendOtpError && styles.contactInputWrapperError,
                        disabled && styles.contactInputWrapperDisabled,
                        readOnly && styles.contactInputWrapperReadonly
                    )}
                >
                    {renderContactInput()}
                    {isVerified && (
                        <div
                            className={styles.verifiedIconWrapper}
                            aria-label="Verified"
                            role="img"
                        >
                            <TickCircleFillIcon />
                        </div>
                    )}
                </div>
                {!disabled && !readOnly && (
                    <Button
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
                        className={styles.contactButton}
                    >
                        {getContactButtonText()}
                    </Button>
                )}
            </div>
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
        </div>
    );
};
