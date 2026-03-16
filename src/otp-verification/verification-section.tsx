import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";

import { FormErrorMessage } from "../form/form-label";
import { InputGroup } from "../input-group";
import { Typography } from "../typography";
import { V3_Breakpoint } from "../v3_theme";
import type { VerificationSectionProps } from "./internal-types";
import { EmailThumbnail, PhoneThumbnail } from "./thumbnail";
import {
    ReSendMessage,
    SectionContainer,
    VerificationSectionWrapper,
    VerifyButton,
    VerifyInputWrapper,
} from "./verification-section-styles";

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
        maxWidth: V3_Breakpoint["sm-max"]({ theme }),
    });
    const thumbnailSize = isMobile ? 64 : 120;

    const renderThumbnail = () => {
        if (!showVerifyOtpThumbnail) return null;
        const iconLabel =
            type === "email" ? "Email verification" : "Phone verification";
        return (
            <div aria-label={iconLabel} role="img">
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
            aria-labelledby={id ? `${id}-title` : undefined}
        >
            {renderThumbnail()}
            <SectionContainer>
                <div>
                    <Typography.BodyMD
                        weight="semibold"
                        id={id ? `${id}-title` : undefined}
                        data-testid={
                            dataTestId ? `${dataTestId}-title` : undefined
                        }
                    >
                        {verifyOtpTitle}
                    </Typography.BodyMD>
                    <Typography.BodyMD
                        weight="regular"
                        id={id ? `${id}-message` : undefined}
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
                            aria-label="Enter OTP code"
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
                            id={id ? `${id}-verify-error` : undefined}
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
