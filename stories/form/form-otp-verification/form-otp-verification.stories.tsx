import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { OtpVerifyType } from "src/otp-verification/types";
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
        const [otpError, setOtpError] = useState<string | undefined>();
        const [sendError, setSendError] = useState<string | undefined>();

        return (
            <Form.OtpVerification
                type={OtpVerifyType.PHONE_NUMBER}
                phoneNumberValue={phoneValue}
                onPhoneNumberChange={setPhoneValue}
                onSendOtp={async () => {
                    setSendError(undefined);
                    // Simulate API call
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (!phoneValue.number) {
                        setSendError("Please enter a valid phone number");
                        throw new Error("Invalid phone number");
                    }
                }}
                onVerifyOtp={async (otp) => {
                    setOtpError(undefined);
                    // Simulate API call
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    if (otp === "123456") {
                    } else {
                        setOtpError("Invalid OTP. Please try again.");
                        throw new Error("Invalid OTP");
                    }
                }}
                onResendOtp={async () => {
                    // Simulate resend API call
                    await new Promise((resolve) => setTimeout(resolve, 800));
                }}
                verifyOtpCountdownTimer={30}
                sendOtpError={sendError}
                verifyOtpError={otpError}
                verifyOtpTitle="Verify your mobile number"
                verifyOtpMessage="An SMS with a 6-digit verification code was sent to you. It will be valid for 30 minutes."
                showVerifyOtpIcon
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

// Email OTP Verification
export const EmailDefault: StoryObj<Component> = {
    render: (_args) => {
        const [emailValue, setEmailValue] = useState<string>("");
        const [otpError, setOtpError] = useState<string | undefined>();
        const [sendError, setSendError] = useState<string | undefined>();

        return (
            <Form.OtpVerification
                type={OtpVerifyType.EMAIL}
                emailValue={emailValue}
                onEmailChange={setEmailValue}
                onSendOtp={async () => {
                    setSendError(undefined);
                    // Simulate API call
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                }}
                onVerifyOtp={async (otp) => {
                    setOtpError(undefined);
                    // Simulate API call
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    if (otp === "123456") {
                    } else {
                        setOtpError("Invalid OTP. Please try again.");
                        throw new Error("Invalid OTP");
                    }
                }}
                onResendOtp={async () => {
                    // Simulate resend API call
                    await new Promise((resolve) => setTimeout(resolve, 800));
                }}
                verifyOtpCountdownTimer={30}
                sendOtpError={sendError}
                verifyOtpError={otpError}
                verifyOtpTitle="Verify your email address"
                verifyOtpMessage="An email with a 6-digit verification code was sent to you. It will be valid for 30 minutes."
                showVerifyOtpIcon
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

        return (
            <Form.OtpVerification
                type={OtpVerifyType.PHONE_NUMBER}
                phoneNumberValue={phoneValue}
                onPhoneNumberChange={setPhoneValue}
                onSendOtp={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    throw new Error("Failed to send OTP");
                }}
                onVerifyOtp={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    throw new Error("Invalid OTP");
                }}
                sendOtpError="Unable to send OTP. Please check your phone number."
                verifyOtpError="Invalid OTP code. Please try again."
                verifyOtpTitle="Verify your mobile number"
                verifyOtpMessage="An SMS with a 6-digit verification code was sent to you."
                showVerifyOtpIcon
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
