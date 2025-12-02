import { useState } from "react";
import { useCountdown } from "../util";
import { SimpleIdGenerator } from "../util";
import { ContactInputSection } from "./contact-input-section";
import { OTPInputWrapper } from "./otp-verification-styles";
import { InternalOtpState, OtpVerificationProps } from "./types";
import { VerificationSection } from "./verification-section";

export const OtpVerification = (props: OtpVerificationProps) => {
    const {
        id,
        "data-testid": dataTestId,
        onSendOtp,
        onVerifyOtp,
        verifyOtpCountdownTimer = 60,
        sendOtpError,
        verifyOtpError,
    } = props;

    const [internalId] = useState(
        () => id || `otp-verification-${SimpleIdGenerator.generate()}`
    );

    const [otpCode, setOtpCode] = useState<string | undefined>("");
    const [isLoading, setIsLoading] = useState(false);
    const [isVerifyLoading, setIsVerifyLoading] = useState(false);
    const [internalState, setInternalState] = useState<InternalOtpState>(
        InternalOtpState.DEFAULT
    );

    const countdown = useCountdown({
        duration: verifyOtpCountdownTimer,
    });

    // Send OTP
    const handleSendOtp = async () => {
        if (!onSendOtp) return;

        try {
            setIsLoading(true);
            await onSendOtp();
            setInternalState(InternalOtpState.SENT);
            // Reset the countdown
            countdown.reset();
            // Start the countdown
            countdown.start();
        } catch (error) {
            // do nothing
        } finally {
            setIsLoading(false);
        }
    };

    // Verify OTP
    const handleVerifyOtp = async () => {
        if (!onVerifyOtp || !otpCode) return;

        try {
            setIsVerifyLoading(true);
            await onVerifyOtp(otpCode);
            setInternalState(InternalOtpState.VERIFIED);
            // Reset the countdown and clear the OTP code in case user enter new OTP later
            countdown.reset();
            setOtpCode("");
        } catch (error) {
            // do nothing
        } finally {
            setIsVerifyLoading(false);
        }
    };
    const resetToDefault = () => {
        if (internalState === InternalOtpState.VERIFIED) {
            setInternalState(InternalOtpState.DEFAULT);
        }
    };

    return (
        <OTPInputWrapper
            id={internalId}
            data-testid={dataTestId || internalId}
            role="region"
            aria-label="OTP verification"
        >
            <ContactInputSection
                {...props}
                id={`${internalId}-contact`}
                data-testid={
                    dataTestId
                        ? `${dataTestId}-contact`
                        : `${internalId}-contact`
                }
                isLoading={isLoading}
                internalState={internalState}
                countdown={countdown}
                onSendOtp={handleSendOtp}
                onStateReset={resetToDefault}
                sendOtpError={sendOtpError}
            />

            {internalState === InternalOtpState.SENT && (
                <VerificationSection
                    {...props}
                    id={`${internalId}-verification`}
                    data-testid={
                        dataTestId
                            ? `${dataTestId}-verification`
                            : `${internalId}-verification`
                    }
                    otpCode={otpCode}
                    setOtpCode={setOtpCode}
                    isVerifyLoading={isVerifyLoading}
                    countdown={countdown}
                    onVerifyOtp={handleVerifyOtp}
                    verifyOtpError={verifyOtpError}
                />
            )}
        </OTPInputWrapper>
    );
};
