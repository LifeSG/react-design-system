import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { OtpVerificationState } from "src/otp-verification";
import { StoryDecorator } from "stories/storybook-common";

type Component = typeof Form.OtpVerification;

const meta: Meta<Component> = {
    title: "Form/OtpVerification",
    component: Form.OtpVerification,
};

export default meta;

// Phone Number OTP Verification
export const PhoneNumberDefault: StoryObj<Component> = {
    render: (_args) => {
        const [phoneValue, setPhoneValue] = useState<{
            countryCode?: string;
            number?: string;
        }>({ countryCode: "+65", number: "" });
        const [otpCode, setOtpCode] = useState<string>("");
        const [otpError, setOtpError] = useState<string | undefined>();
        const [sendError, setSendError] = useState<string | undefined>();

        const [otpState, setOtpState] = useState<OtpVerificationState>(
            OtpVerificationState.DEFAULT
        );
        const [isLoading, setIsLoading] = useState(false);
        const [isVerifyLoading, setIsVerifyLoading] = useState(false);

        return (
            <Form.OtpVerification
                label="Mobile Number"
                type="phone-number"
                phoneNumberValue={phoneValue}
                onPhoneNumberChange={setPhoneValue}
                otpState={otpState}
                onOtpStateChange={setOtpState}
                isLoading={isLoading}
                onLoadingChange={setIsLoading}
                isVerifyLoading={isVerifyLoading}
                onVerifyLoadingChange={setIsVerifyLoading}
                onSendOtp={async () => {
                    setSendError(undefined);
                    // Simulate API call
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (!phoneValue.number) {
                        setSendError("Please enter a valid phone number");
                        throw new Error("Invalid phone number");
                    }
                }}
                otpValue={{ value: otpCode }}
                onOtpChange={setOtpCode}
                onVerifyOtp={async (inputOtp) => {
                    setOtpError(undefined);
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    // Simulate OTP validation
                    if (inputOtp !== "123456") {
                        setOtpError("Invalid OTP code. Please try again.");
                        throw new Error("Invalid OTP");
                    }
                    // Success - OTP will be cleared automatically
                }}
                onResendOtp={async () => {
                    // Simulate resend API call
                    await new Promise((resolve) => setTimeout(resolve, 800));
                }}
                verifyOtpCountdownTimer={30}
                sendOtpError={sendError}
                verifyOtpError={otpError}
                verifyOtpTitle="Verify your mobile number"
                verifyOtpMessage="An SMS with a 6-digit verification code was sent to you. It will be valid for 30 minutes. Test OTP: 123456"
                showVerifyOtpThumbnail
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

// Email OTP Verification
export const EmailDefault: StoryObj<Component> = {
    render: (_args) => {
        const [emailValue, setEmailValue] = useState<string>("");
        const [otpCode, setOtpCode] = useState<string>("");
        const [otpError, setOtpError] = useState<string | undefined>();
        const [sendError, setSendError] = useState<string | undefined>();

        const [otpState, setOtpState] = useState<OtpVerificationState>(
            OtpVerificationState.DEFAULT
        );
        const [isLoading, setIsLoading] = useState(false);
        const [isVerifyLoading, setIsVerifyLoading] = useState(false);

        return (
            <Form.OtpVerification
                label="Email"
                type="email"
                emailValue={emailValue}
                onEmailChange={setEmailValue}
                otpState={otpState}
                onOtpStateChange={setOtpState}
                isLoading={isLoading}
                onLoadingChange={setIsLoading}
                isVerifyLoading={isVerifyLoading}
                onVerifyLoadingChange={setIsVerifyLoading}
                onSendOtp={async () => {
                    setSendError(undefined);
                    // Simulate API call
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                }}
                otpValue={{ value: otpCode }}
                onOtpChange={setOtpCode}
                onVerifyOtp={async (inputOtp) => {
                    setOtpError(undefined);
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    // Simulate OTP validation
                    if (inputOtp !== "654321") {
                        setOtpError("Invalid OTP code. Please try again.");
                        throw new Error("Invalid OTP");
                    }
                    // Success - OTP will be cleared automatically
                }}
                onResendOtp={async () => {
                    // Simulate resend API call
                    await new Promise((resolve) => setTimeout(resolve, 800));
                }}
                verifyOtpCountdownTimer={30}
                sendOtpError={sendError}
                verifyOtpError={otpError}
                verifyOtpTitle="Verify your email address"
                verifyOtpMessage="An email with a 6-digit verification code was sent to you. It will be valid for 30 minutes. Test OTP: 654321"
                showVerifyOtpThumbnail
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

// Error Handling
export const WithErrors: StoryObj<Component> = {
    render: (_args) => {
        const [phoneValue, setPhoneValue] = useState<{
            countryCode?: string;
            number?: string;
        }>({ countryCode: "+65", number: "" });
        const [otpCode, setOtpCode] = useState<string>("");

        const [otpState, setOtpState] = useState<OtpVerificationState>(
            OtpVerificationState.DEFAULT
        );
        const [isLoading, setIsLoading] = useState(false);
        const [isVerifyLoading, setIsVerifyLoading] = useState(false);

        return (
            <Form.OtpVerification
                label="Mobile Number"
                type="phone-number"
                phoneNumberValue={phoneValue}
                onPhoneNumberChange={setPhoneValue}
                otpState={otpState}
                onOtpStateChange={setOtpState}
                isLoading={isLoading}
                onLoadingChange={setIsLoading}
                isVerifyLoading={isVerifyLoading}
                onVerifyLoadingChange={setIsVerifyLoading}
                onSendOtp={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    throw new Error("Failed to send OTP");
                }}
                otpValue={{ value: otpCode }}
                onOtpChange={setOtpCode}
                onVerifyOtp={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    // Always throw error to demonstrate error handling
                    throw new Error("Invalid OTP");
                }}
                onResendOtp={async () => {
                    // Simulate resend API call
                    await new Promise((resolve) => setTimeout(resolve, 800));
                }}
                verifyOtpCountdownTimer={30}
                sendOtpError="Unable to send OTP. Please check your phone number."
                verifyOtpError="Invalid OTP code. Please try again."
                verifyOtpTitle="Verify your mobile number"
                verifyOtpMessage="An SMS with a 6-digit verification code was sent to you."
                showVerifyOtpThumbnail
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
