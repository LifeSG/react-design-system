"use client";
import { OtpInput } from "@lifesg/react-design-system/otp-input";

export default function Story() {
    return (
        <OtpInput
            data-testid="otp-with-error"
            numOfInput={6}
            cooldownDuration={0}
            value={["1", "2", "3", "4", "5", "6"]}
            errorMessage="Invalid OTP. Please try again."
        />
    );
}
