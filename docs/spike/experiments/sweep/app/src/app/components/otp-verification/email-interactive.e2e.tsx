"use client";
import { Form } from "@lifesg/react-design-system/form";
import type { OtpVerificationState } from "@lifesg/react-design-system/otp-verification";
import { useState } from "react";

export default function Story() {
    const [otpState, setOtpState] = useState<OtpVerificationState>("default");
    const [emailValue, setEmailValue] = useState<string>("");
    const [otpValue, setOtpValue] = useState<string | undefined>(undefined);

    return (
        <Form.OtpVerification
            data-testid="otp-email"
            label="Email"
            type="email"
            otpState={otpState}
            onOtpStateChange={setOtpState}
            emailValue={emailValue}
            onEmailChange={setEmailValue}
            onSendOtp={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }}
            otpValue={{ value: otpValue }}
            onOtpChange={setOtpValue}
            onVerifyOtp={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }}
            onResendOtp={async () => {
                await new Promise((resolve) => setTimeout(resolve, 500));
            }}
            verifyOtpCountdownTimer={3}
            verifyOtpTitle="Verify your email address"
            showVerifyOtpThumbnail
        />
    );
}
