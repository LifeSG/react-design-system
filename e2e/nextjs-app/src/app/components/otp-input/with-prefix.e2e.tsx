"use client";
import { OtpInput } from "@lifesg/react-design-system/otp-input";

export default function Story() {
    return (
        <OtpInput
            data-testid="otp-with-prefix"
            numOfInput={6}
            cooldownDuration={0}
            actionButtonProps={{ children: "Resend OTP" }}
            prefix={{ value: "GVT", separator: "-" }}
        />
    );
}
