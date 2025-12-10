import { useState } from "react";
import { useCountdown } from "../util";
import { ContactInputSection } from "./contact-input-section";
import { OTPInputWrapper } from "./otp-verification-styles";
import { InternalOtpState, OtpVerificationProps } from "./types";
import { VerificationSection } from "./verification-section";

export const OtpVerification = (props: OtpVerificationProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        id,
        "data-testid": dataTestId,
        className,
        inputId,
        onSendOtp,
        onVerifyOtp,
        verifyOtpCountdownTimer = 60,
        sendOtpError,
        verifyOtpError,
        otpValue,
        onOtpChange,
    } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [isVerifyLoading, setIsVerifyLoading] = useState(false);
    const [internalState, setInternalState] = useState<InternalOtpState>(
        InternalOtpState.DEFAULT
    );

    const countdown = useCountdown({
        duration: verifyOtpCountdownTimer,
    });

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
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
        if (!onVerifyOtp || !otpValue?.value) return;

        try {
            setIsVerifyLoading(true);
            await onVerifyOtp(otpValue?.value);
            setInternalState(InternalOtpState.VERIFIED);
            // Reset the countdown and clear the OTP code in case user enter new OTP later
            countdown.reset();
            onOtpChange?.("");
        } catch (error) {
            // do nothing
        } finally {
            setIsVerifyLoading(false);
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const resetToDefault = () => {
        if (internalState === InternalOtpState.VERIFIED) {
            setInternalState(InternalOtpState.DEFAULT);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <OTPInputWrapper
            id={id}
            data-testid={dataTestId}
            className={className}
            role="region"
            aria-label="OTP verification"
        >
            <ContactInputSection
                {...props}
                inputId={inputId}
                data-testid={dataTestId ? `${dataTestId}-contact` : undefined}
                isLoading={isLoading}
                isVerified={internalState === InternalOtpState.VERIFIED}
                countdown={countdown}
                onSendOtp={handleSendOtp}
                onStateReset={resetToDefault}
                sendOtpError={sendOtpError}
            />

            {internalState === InternalOtpState.SENT && (
                <VerificationSection
                    {...props}
                    data-testid={
                        dataTestId ? `${dataTestId}-verification` : undefined
                    }
                    otpCode={otpValue?.value}
                    setOtpCode={onOtpChange}
                    isVerifyLoading={isVerifyLoading}
                    countdown={countdown}
                    onVerifyOtp={handleVerifyOtp}
                    verifyOtpError={verifyOtpError}
                />
            )}
        </OTPInputWrapper>
    );
};
