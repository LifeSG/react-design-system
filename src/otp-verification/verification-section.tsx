import { Button } from "../button";
import { FormErrorMessage } from "../form/form-label";
import { InputGroup } from "../input-group";
import { concatIds } from "../shared/accessibility";
import { Typography } from "../typography";
import { useId } from "../util";
import type { VerificationSectionProps } from "./internal-types";
import { EmailThumbnail, PhoneThumbnail } from "./thumbnail";
import * as styles from "./verification-section.styles";

export const VerificationSection = ({
    id,
    "data-testid": dataTestId,
    type,
    showVerifyOtpThumbnail = false,
    verifyOtpTitle,
    verifyOtpMessage,
    otpCode,
    setOtpCode,
    isVerifyLoading,
    countdown,
    onVerifyOtp,
    verifyOtpError,
    otpPrefix,
    otpSeparator,
}: VerificationSectionProps) => {
    const internalId = useId();

    const titleId = `${internalId}-title`;
    const messageId = `${internalId}-message`;
    const otpAddonId = `${internalId}-verify-input-addon`;
    const verifyErrorId = `${internalId}-verify-error`;

    const renderThumbnail = () => {
        if (!showVerifyOtpThumbnail) return null;

        return (
            <div aria-hidden>
                {type === "email" ? <EmailThumbnail /> : <PhoneThumbnail />}
            </div>
        );
    };

    return (
        <div
            id={id}
            data-testid={dataTestId}
            role="group"
            className={styles.verificationSectionWrapper}
        >
            {renderThumbnail()}
            <div className={styles.sectionContainer}>
                <div>
                    <Typography.BodyMD
                        weight="semibold"
                        id={titleId}
                        data-testid={
                            dataTestId ? `${dataTestId}-title` : undefined
                        }
                    >
                        {verifyOtpTitle}
                    </Typography.BodyMD>
                    <Typography.BodyMD
                        weight="regular"
                        id={messageId}
                        data-testid={
                            dataTestId ? `${dataTestId}-message` : undefined
                        }
                    >
                        {verifyOtpMessage}
                    </Typography.BodyMD>
                </div>
                <div>
                    <div className={styles.verifyInputWrapper}>
                        <InputGroup
                            id={id ? `${id}-verify-input` : undefined}
                            data-testid={
                                dataTestId
                                    ? `${dataTestId}-verify-input`
                                    : undefined
                            }
                            value={otpCode}
                            onChange={(e) => setOtpCode?.(e.target.value)}
                            placeholder="Enter OTP"
                            addon={{
                                type: "label",
                                attributes: {
                                    value: `${otpPrefix ?? ""}${
                                        otpSeparator ?? ""
                                    }`,
                                },
                            }}
                            type="number"
                            error={!!verifyOtpError}
                            aria-labelledby={titleId}
                            aria-describedby={concatIds(
                                messageId,
                                otpAddonId,
                                verifyOtpError ? verifyErrorId : undefined
                            )}
                            aria-invalid={!!verifyOtpError}
                            aria-required={true}
                        />
                        <Button
                            id={id ? `${id}-verify-button` : undefined}
                            type="button"
                            data-testid={
                                dataTestId
                                    ? `${dataTestId}-verify-button`
                                    : undefined
                            }
                            onClick={onVerifyOtp}
                            loading={isVerifyLoading}
                            styleType="light"
                            disabled={!otpCode || otpCode.length === 0}
                            className={styles.verifyButton}
                        >
                            {!isVerifyLoading && "Verify"}
                        </Button>
                    </div>
                    {verifyOtpError && (
                        <FormErrorMessage
                            id={verifyErrorId}
                            data-testid={
                                dataTestId
                                    ? `${dataTestId}-verify-error`
                                    : undefined
                            }
                            role="alert"
                        >
                            {verifyOtpError}
                        </FormErrorMessage>
                    )}
                </div>
                {countdown.isRunning && (
                    <Typography.BodyMD
                        id={id ? `${id}-countdown` : undefined}
                        data-testid={
                            dataTestId ? `${dataTestId}-countdown` : undefined
                        }
                        className={styles.resendMessage}
                    >
                        Resend OTP in {countdown.formatTime()}
                    </Typography.BodyMD>
                )}
            </div>
        </div>
    );
};
