"use client";
import { OtpVerification } from "@lifesg/react-design-system/otp-verification";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <OtpVerification
                data-testid="otp-email-verified"
                type="email"
                otpState="verified"
                onOtpStateChange={() => {}}
                emailValue="test@example.com"
            />
            <OtpVerification
                data-testid="otp-email-sent"
                type="email"
                otpState="sent"
                onOtpStateChange={() => {}}
                verifyOtpTitle="Verify your email address"
            />
            <OtpVerification
                data-testid="otp-email-sent-error"
                type="email"
                otpState="sent"
                onOtpStateChange={() => {}}
                verifyOtpTitle="Verify your email address"
                verifyOtpError="Invalid OTP code. Please try again."
            />
            <OtpVerification
                data-testid="otp-email-sent-otp-prefixed"
                type="email"
                otpState="sent"
                onOtpStateChange={() => {}}
                otpValue={{ value: "", prefix: "BZO", separator: "-" }}
                verifyOtpTitle="Verify your email address"
            />
            <OtpVerification
                data-testid="otp-email-sent-description"
                type="email"
                otpState="sent"
                onOtpStateChange={() => {}}
                verifyOtpTitle="Verify your email address"
                verifyOtpMessage="An email with a 6-digit verification code was sent to you. It will be valid for 30 minutes."
            />
            <OtpVerification
                data-testid="otp-email-sent-description-and-thumbnail"
                type="email"
                otpState="sent"
                onOtpStateChange={() => {}}
                showVerifyOtpThumbnail
                verifyOtpTitle="Verify your email address"
                verifyOtpMessage="An email with a 6-digit verification code was sent to you. It will be valid for 30 minutes."
            />
        </div>
    );
}
