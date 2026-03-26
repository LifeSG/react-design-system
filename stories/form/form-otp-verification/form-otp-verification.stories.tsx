import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Form } from "src/form";
import {
    OtpVerificationPhoneNumberInputProps,
    OtpVerificationState,
} from "src/otp-verification";
import { StoryDecorator } from "stories/storybook-common";

type Component = typeof Form.OtpVerification;

const meta: Meta<Component> = {
    title: "Form/OtpVerification",
    component: Form.OtpVerification,
};

export default meta;

export const PhoneNumberDefault: StoryObj<Component> = {
    render: (_args) => {
        const [otpState, setOtpState] =
            useState<OtpVerificationState>("default");
        const [phoneValue, setPhoneValue] = useState<
            OtpVerificationPhoneNumberInputProps["phoneNumberValue"]
        >({ countryCode: "+65", number: "" });
        const [otpValue, setOtpValue] = useState<string | undefined>(undefined);
        const [sendOtpError, setSendOtpError] = useState<string | undefined>(
            undefined
        );
        const [verifyOtpError, setVerifyOtpError] = useState<
            string | undefined
        >(undefined);

        return (
            <Form.OtpVerification
                label="Phone number"
                type="phone-number"
                otpState={otpState}
                onOtpStateChange={setOtpState}
                phoneNumberValue={phoneValue}
                onPhoneNumberChange={setPhoneValue}
                onSendOtp={async () => {
                    setSendOtpError(undefined);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (!phoneValue?.number) {
                        setSendOtpError("Please enter a valid phone number");
                        throw new Error("Invalid phone number");
                    }
                }}
                sendOtpError={sendOtpError}
                otpValue={{ value: otpValue, prefix: "BZO", separator: "-" }}
                onOtpChange={setOtpValue}
                onVerifyOtp={async (otpInput) => {
                    setVerifyOtpError(undefined);
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    if (otpInput !== "123456") {
                        setVerifyOtpError(
                            "Invalid OTP code. Please try again."
                        );
                        throw new Error("Invalid OTP");
                    }
                }}
                verifyOtpError={verifyOtpError}
                onResendOtp={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 800));
                }}
                verifyOtpCountdownTimer={30}
                verifyOtpTitle="Verify your mobile number"
                verifyOtpMessage="Test OTP: 123456"
                showVerifyOtpThumbnail
                fixedCountry
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const PhoneNumberVariants: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.OtpVerification
                    label="This is the default state"
                    type="phone-number"
                    otpState="default"
                    onOtpStateChange={() => {}}
                    phoneNumberValue={{ countryCode: "+65", number: "" }}
                    fixedCountry
                />
                <Form.OtpVerification
                    label="This is the send otp error state"
                    type="phone-number"
                    otpState="default"
                    onOtpStateChange={() => {}}
                    phoneNumberValue={{ countryCode: "+65", number: "" }}
                    sendOtpError="Something went wrong"
                    fixedCountry
                />
                <Form.OtpVerification
                    label="This is the verify otp error state"
                    type="phone-number"
                    otpState="sent"
                    otpValue={{ value: "", prefix: "BZO", separator: "-" }}
                    onOtpStateChange={() => {}}
                    phoneNumberValue={{ countryCode: "+65", number: "" }}
                    verifyOtpTitle="Verify your mobile number"
                    verifyOtpError="Something went wrong"
                    showVerifyOtpThumbnail
                    fixedCountry
                />
                <Form.OtpVerification
                    label="This is the verified state"
                    type="phone-number"
                    otpState="verified"
                    onOtpStateChange={() => {}}
                    phoneNumberValue={{ countryCode: "+65", number: "" }}
                    fixedCountry
                />
                <Form.OtpVerification
                    label="This is the disabled state"
                    type="phone-number"
                    otpState="default"
                    onOtpStateChange={() => {}}
                    phoneNumberValue={{ countryCode: "+65", number: "" }}
                    disabled
                    fixedCountry
                />
                <Form.OtpVerification
                    label="This is the readonly state"
                    type="phone-number"
                    otpState="default"
                    onOtpStateChange={() => {}}
                    phoneNumberValue={{ countryCode: "+65", number: "" }}
                    readOnly
                    fixedCountry
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const EmailDefault: StoryObj<Component> = {
    render: (_args) => {
        const [otpState, setOtpState] =
            useState<OtpVerificationState>("default");
        const [emailValue, setEmailValue] = useState<string>("");
        const [otpValue, setOtpValue] = useState<string | undefined>(undefined);
        const [sendOtpError, setSendOtpError] = useState<string | undefined>(
            undefined
        );
        const [verifyOtpError, setVerifyOtpError] = useState<
            string | undefined
        >(undefined);

        return (
            <Form.OtpVerification
                label="Email"
                type="email"
                otpState={otpState}
                onOtpStateChange={setOtpState}
                emailValue={emailValue}
                onEmailChange={setEmailValue}
                onSendOtp={async () => {
                    setSendOtpError(undefined);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (!emailValue) {
                        setSendOtpError("Please enter a valid email address");
                        throw new Error("Invalid email address");
                    }
                }}
                sendOtpError={sendOtpError}
                otpValue={{ value: otpValue, prefix: "BZO", separator: "-" }}
                onOtpChange={setOtpValue}
                onVerifyOtp={async (otpInput) => {
                    setVerifyOtpError(undefined);
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    if (otpInput !== "123456") {
                        setVerifyOtpError(
                            "Invalid OTP code. Please try again."
                        );
                        throw new Error("Invalid OTP");
                    }
                }}
                verifyOtpError={verifyOtpError}
                onResendOtp={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 800));
                }}
                verifyOtpCountdownTimer={30}
                verifyOtpTitle="Verify your email address"
                verifyOtpMessage="Test OTP: 123456"
                showVerifyOtpThumbnail
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const EmailVariants: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.OtpVerification
                    label="This is the default state"
                    type="email"
                    otpState="default"
                    onOtpStateChange={() => {}}
                />
                <Form.OtpVerification
                    label="This is the send otp error state"
                    type="email"
                    otpState="default"
                    onOtpStateChange={() => {}}
                    sendOtpError="Something went wrong"
                />
                <Form.OtpVerification
                    label="This is the verify otp error state"
                    type="email"
                    otpState="sent"
                    otpValue={{ value: "", prefix: "BZO", separator: "-" }}
                    onOtpStateChange={() => {}}
                    verifyOtpTitle="Verify your email address"
                    verifyOtpError="Something went wrong"
                    showVerifyOtpThumbnail
                />
                <Form.OtpVerification
                    label="This is the verified state"
                    type="email"
                    otpState="verified"
                    onOtpStateChange={() => {}}
                />
                <Form.OtpVerification
                    label="This is the disabled state"
                    type="email"
                    otpState="default"
                    onOtpStateChange={() => {}}
                    disabled
                />
                <Form.OtpVerification
                    type="email"
                    otpState="default"
                    onOtpStateChange={() => {}}
                    label="This is the readonly state"
                    readOnly
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
