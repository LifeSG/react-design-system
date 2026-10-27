"use client";
import { Form } from "@lifesg/react-design-system/form";
import type {
    OtpVerificationPhoneNumberInputProps,
    OtpVerificationState,
} from "@lifesg/react-design-system/otp-verification";
import { useState } from "react";

export default function Story() {
    const [otpState, setOtpState] = useState<OtpVerificationState>("default");
    const [phoneValue, setPhoneValue] = useState<
        OtpVerificationPhoneNumberInputProps["phoneNumberValue"]
    >({ countryCode: "+65", number: "" });
    const [otpValue, setOtpValue] = useState<string | undefined>(undefined);

    return (
        <Form.OtpVerification
            data-testid="otp-phone"
            label="Phone number"
            type="phone-number"
            otpState={otpState}
            onOtpStateChange={setOtpState}
            phoneNumberValue={phoneValue}
            onPhoneNumberChange={setPhoneValue}
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
            verifyOtpTitle="Verify your mobile number"
            showVerifyOtpThumbnail
            fixedCountry
        />
    );
}
