"use client";
import { OtpInput } from "@lifesg/react-design-system/otp-input";

export default function Story() {
    return (
        <OtpInput
            data-testid="otp-cooldown"
            numOfInput={6}
            cooldownDuration={10}
        />
    );
}
