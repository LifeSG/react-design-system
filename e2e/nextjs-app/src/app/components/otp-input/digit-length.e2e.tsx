"use client";
import { OtpInput } from "@lifesg/react-design-system/otp-input";

export default function Story() {
    return (
        <div className="story-column-container">
            <OtpInput
                data-testid="otp-4-digit"
                numOfInput={4}
                cooldownDuration={0}
                actionButtonProps={{ children: "Resend OTP" }}
            />
            <OtpInput
                data-testid="otp-6-digit"
                numOfInput={6}
                cooldownDuration={0}
                actionButtonProps={{ children: "Resend OTP" }}
            />
        </div>
    );
}
