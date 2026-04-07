import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { FormErrorMessage } from "../form/form-label";
import { InputGroup } from "../input-group";
import { Breakpoint } from "../theme";
import { Typography } from "../typography";
import { VerificationSectionProps } from "./internal-types";
import { EmailThumbnail, PhoneThumbnail } from "./thumbnail";
import {
    ReSendMessage,
    SectionContainer,
    VerificationSectionWrapper,
    VerifyButton,
    VerifyInputWrapper,
} from "./verification-section-styles";
import { concatIds } from "../shared/accessibility";

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
    const theme = useContext(ThemeContext);
    const isMobile = useMediaQuery({
        maxWidth: Breakpoint["sm-max"]({ theme }),
    });
    const thumbnailSize = isMobile ? 64 : 120;

    const titleId = id ? `${id}-title` : undefined;
    const messageId = id ? `${id}-message` : undefined;
    const otpAddonId = id ? `${id}-verify-input-addon` : undefined;
    const verifyErrorId = id ? `${id}-verify-error` : undefined;

    const renderThumbnail = () => {
        if (!showVerifyOtpThumbnail) return null;

        return (
            <div aria-hidden="true">
                {type === "email" ? (
                    <EmailThumbnail
                        width={thumbnailSize}
                        height={thumbnailSize}
                    />
                ) : (
                    <PhoneThumbnail
                        width={thumbnailSize}
                        height={thumbnailSize}
                    />
                )}
            </div>
        );
    };

    return (
        <VerificationSectionWrapper
            id={id}
            data-testid={dataTestId}
            role="group"
        >
            {renderThumbnail()}
            <SectionContainer>
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
                    <VerifyInputWrapper>
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
                        <VerifyButton
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
                        >
                            {!isVerifyLoading && "Verify"}
                        </VerifyButton>
                    </VerifyInputWrapper>
                    {verifyOtpError && (
                        <FormErrorMessage
                            id={id ? verifyErrorId : undefined}
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
                    <ReSendMessage
                        id={id ? `${id}-countdown` : undefined}
                        data-testid={
                            dataTestId ? `${dataTestId}-countdown` : undefined
                        }
                    >
                        Resend OTP in {countdown.formatTime()}
                    </ReSendMessage>
                )}
            </SectionContainer>
        </VerificationSectionWrapper>
    );
};
