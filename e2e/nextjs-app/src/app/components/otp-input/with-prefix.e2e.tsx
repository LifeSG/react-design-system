"use client";
import { OtpInput } from "@lifesg/react-design-system/otp-input";

export default function Story() {
    return (
        <OtpInput
            data-testid="otp-with-prefix"
            numOfInput={6}
            cooldownDuration={0}
            prefix={{ value: "GVT", separator: "-" }}
        />
    );
}
