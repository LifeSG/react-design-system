import { useCountdown } from "../util";
import { ContactInputSection } from "./contact-input-section";
import { OTPInputWrapper } from "./otp-verification-styles";
import { OtpVerificationProps, OtpVerificationState } from "./types";
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
        isLoading,
        onLoadingChange,
        isVerifyLoading,
        onVerifyLoadingChange,
    } = props;

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
            onLoadingChange(true);
            await onSendOtp();
            onOtpStateChange(OtpVerificationState.SENT);
            // Reset the countdown
            countdown.reset();
            // Start the countdown
            countdown.start();
        } catch (error) {
            // do nothing
        } finally {
            onLoadingChange(false);
        }
    };

    // Verify OTP
    const handleVerifyOtp = async () => {
        if (!onVerifyOtp || !otpValue?.value) return;

        try {
            onVerifyLoadingChange(true);
            await onVerifyOtp(otpValue?.value);
            onOtpStateChange(OtpVerificationState.VERIFIED);
            // Reset the countdown and clear the OTP code in case user enter new OTP later
            countdown.reset();
            onOtpChange?.("");
        } catch (error) {
            // do nothing
        } finally {
            onVerifyLoadingChange(false);
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const resetToDefault = () => {
        if (otpState === OtpVerificationState.VERIFIED) {
            onOtpStateChange(OtpVerificationState.DEFAULT);
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
                isVerified={otpState === OtpVerificationState.VERIFIED}
                countdown={countdown}
                onSendOtp={handleSendOtp}
                onStateReset={resetToDefault}
                sendOtpError={sendOtpError}
            />

            {otpState === OtpVerificationState.SENT && (
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
