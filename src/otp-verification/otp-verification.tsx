import { useState } from "react";
import { useCountdown } from "../util";
import { ContactInputSection } from "./contact-input-section";
import { OTPInputWrapper } from "./otp-verification-styles";
import { OtpVerificationProps } from "./types";
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
        otpState,
        onOtpStateChange,
    } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [isVerifyLoading, setIsVerifyLoading] = useState(false);

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
            onOtpStateChange("sent");
            countdown.reset();
            countdown.start();
        } catch {
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
            onOtpStateChange("verified");
            // Reset the countdown and clear the OTP code in case user enter new OTP later
            countdown.reset();
            onOtpChange?.("");
        } catch {
            // do nothing
        } finally {
            setIsVerifyLoading(false);
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const resetToDefault = () => {
        if (otpState === "verified") {
            onOtpStateChange("default");
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <OTPInputWrapper id={id} data-testid={dataTestId} className={className}>
            <ContactInputSection
                {...props}
                inputId={inputId}
                data-testid={dataTestId ? `${dataTestId}-contact` : undefined}
                isLoading={isLoading}
                isVerified={otpState === "verified"}
                countdown={countdown}
                onSendOtp={handleSendOtp}
                onStateReset={resetToDefault}
                sendOtpError={sendOtpError}
            />

            {otpState === "sent" && (
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
