"use client";
import { OtpVerification } from "@lifesg/react-design-system/otp-verification";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <OtpVerification
                data-testid="otp-phone-verified"
                type="phone-number"
                otpState="verified"
                onOtpStateChange={() => {}}
                phoneNumberValue={{ countryCode: "+65", number: "91234567" }}
                fixedCountry
            />
            <OtpVerification
                data-testid="otp-phone-sent"
                type="phone-number"
                phoneNumberValue={{ countryCode: "+65" }}
                otpState="sent"
                onOtpStateChange={() => {}}
                verifyOtpTitle="Verify your mobile number"
                fixedCountry
            />
            <OtpVerification
                data-testid="otp-phone-sent-error"
                type="phone-number"
                phoneNumberValue={{ countryCode: "+65" }}
                otpState="sent"
                onOtpStateChange={() => {}}
                verifyOtpTitle="Verify your mobile number"
                verifyOtpError="Invalid OTP code. Please try again."
                fixedCountry
            />
            <OtpVerification
                data-testid="otp-phone-sent-otp-prefixed"
                type="phone-number"
                phoneNumberValue={{ countryCode: "+65" }}
                otpState="sent"
                onOtpStateChange={() => {}}
                otpValue={{ value: "", prefix: "BZO", separator: "-" }}
                verifyOtpTitle="Verify your mobile number"
                fixedCountry
            />
            <OtpVerification
                data-testid="otp-phone-sent-description"
                type="phone-number"
                phoneNumberValue={{ countryCode: "+65" }}
                otpState="sent"
                onOtpStateChange={() => {}}
                verifyOtpTitle="Verify your mobile number"
                verifyOtpMessage="An SMS with a 6-digit verification code was sent to you. It will be valid for 30 minutes."
                fixedCountry
            />
            <OtpVerification
                data-testid="otp-phone-sent-thumbnail"
                type="phone-number"
                phoneNumberValue={{ countryCode: "+65" }}
                otpState="sent"
                onOtpStateChange={() => {}}
                showVerifyOtpThumbnail
                verifyOtpTitle="Verify your mobile number"
                fixedCountry
            />
        </div>
    );
}
