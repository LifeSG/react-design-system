import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { Button } from "../button/button";
import { FormErrorMessage } from "../form/form-label";
import { InputGroup } from "../input-group";
import { Breakpoint } from "../theme";
import { Typography } from "../typography";
import { EmailThumbnail, PhoneThumbnail } from "./thumbnails-img";
import { OtpVerifyType, VerificationSectionProps } from "./types";
import {
    InputSectionWrapper,
    ReSendMessage,
    SectionContainer,
    TitleWrapper,
    VerificationSectionWrapper,
    VerifyInputWrapper,
} from "./verification-section-styles";

export const VerificationSection = ({
    id,
    "data-testid": dataTestId,
    type,
    showVerifyOtpIcon = false,
    verifyOtpTitle,
    verifyOtpMessage,
    otpCode,
    setOtpCode,
    isVerifyLoading,
    countdown,
    onVerifyOtp,
    verifyOtpError,
}: VerificationSectionProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery({
        maxWidth: Breakpoint["sm-max"]({ theme }),
    });
    const thumbnailSize = isMobile ? 64 : 120;

    const renderThumbnail = () => {
        if (!showVerifyOtpIcon) return null;
        const iconLabel =
            type === OtpVerifyType.EMAIL
                ? "Email verification"
                : "Phone verification";
        return (
            <div aria-label={iconLabel} role="img">
                {type === OtpVerifyType.EMAIL ? (
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
            aria-labelledby={`${id}-title`}
            aria-describedby={`${id}-message`}
        >
            {renderThumbnail()}
            <SectionContainer>
                <TitleWrapper>
                    <Typography.BodyMD
                        weight="semibold"
                        id={`${id}-title`}
                        data-testid={`${dataTestId}-title`}
                    >
                        {verifyOtpTitle}
                    </Typography.BodyMD>
                    <Typography.BodyMD
                        weight="regular"
                        id={`${id}-message`}
                        data-testid={`${dataTestId}-message`}
                    >
                        {verifyOtpMessage}
                    </Typography.BodyMD>
                </TitleWrapper>
                <InputSectionWrapper>
                    <VerifyInputWrapper>
                        <InputGroup
                            id={`${id}-input`}
                            data-testid={`${dataTestId}-input`}
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                            placeholder="Enter OTP"
                            addon={{
                                type: "label",
                                attributes: {
                                    value: "BZO-",
                                },
                            }}
                            error={!!verifyOtpError}
                            aria-label="Enter OTP code"
                            aria-invalid={!!verifyOtpError}
                            aria-required={true}
                        />
                        <Button.Default
                            id={`${id}-button`}
                            data-testid={`${dataTestId}-button`}
                            onClick={onVerifyOtp}
                            loading={isVerifyLoading}
                            styleType="light"
                            disabled={!otpCode || otpCode.length === 0}
                        >
                            {!isVerifyLoading && "Verify"}
                        </Button.Default>
                    </VerifyInputWrapper>
                    {verifyOtpError && (
                        <FormErrorMessage
                            id={`${id}-error`}
                            data-testid={`${dataTestId}-error`}
                            role="alert"
                            aria-live="polite"
                        >
                            {verifyOtpError}
                        </FormErrorMessage>
                    )}
                </InputSectionWrapper>
                {countdown.isRunning && (
                    <ReSendMessage
                        weight="semibold"
                        id={`${id}-countdown`}
                        data-testid={`${dataTestId}-countdown`}
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        Resend OTP in {countdown.formatTime()}
                    </ReSendMessage>
                )}
            </SectionContainer>
        </VerificationSectionWrapper>
    );
};
