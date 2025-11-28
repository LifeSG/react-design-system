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
        return type === OtpVerifyType.EMAIL ? (
            <EmailThumbnail width={thumbnailSize} height={thumbnailSize} />
        ) : (
            <PhoneThumbnail width={thumbnailSize} height={thumbnailSize} />
        );
    };

    return (
        <VerificationSectionWrapper>
            {renderThumbnail()}
            <SectionContainer>
                <TitleWrapper>
                    <Typography.BodyMD weight="semibold">
                        {verifyOtpTitle}
                    </Typography.BodyMD>
                    <Typography.BodyMD weight="regular">
                        {verifyOtpMessage}
                    </Typography.BodyMD>
                </TitleWrapper>
                <InputSectionWrapper>
                    <VerifyInputWrapper>
                        <InputGroup
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
                        />
                        <Button.Default
                            onClick={onVerifyOtp}
                            loading={isVerifyLoading}
                            styleType="light"
                        >
                            {!isVerifyLoading && "Verify"}
                        </Button.Default>
                    </VerifyInputWrapper>
                    {verifyOtpError && (
                        <FormErrorMessage>{verifyOtpError}</FormErrorMessage>
                    )}
                </InputSectionWrapper>
                {countdown.isRunning && (
                    <ReSendMessage weight="semibold">
                        Resend OTP in {countdown.formatTime()}
                    </ReSendMessage>
                )}
            </SectionContainer>
        </VerificationSectionWrapper>
    );
};
