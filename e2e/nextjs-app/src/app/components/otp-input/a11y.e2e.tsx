"use client";

import { OtpInput } from "@lifesg/react-design-system/otp-input";

export default function Story() {
    return <OtpInput numOfInput={3} cooldownDuration={10} />;
}
