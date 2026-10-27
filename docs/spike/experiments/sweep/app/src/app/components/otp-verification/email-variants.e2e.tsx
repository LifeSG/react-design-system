"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.OtpVerification
                data-testid="otp-email-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                type="email"
                otpState="default"
                onOtpStateChange={() => {}}
            />
            <Form.OtpVerification
                data-testid="otp-email-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                type="email"
                otpState="default"
                onOtpStateChange={() => {}}
                disabled
            />
            <Form.OtpVerification
                data-testid="otp-email-readonly"
                label={{
                    children: "Read only",
                    subtitle: "This is the subtitle",
                }}
                type="email"
                otpState="default"
                onOtpStateChange={() => {}}
                readOnly
            />
            <Form.OtpVerification
                data-testid="otp-email-error"
                label={{
                    children: "Contact error",
                    subtitle: "This is the subtitle",
                }}
                type="email"
                otpState="default"
                onOtpStateChange={() => {}}
                sendOtpError="Please enter a valid email address"
            />
        </div>
    );
}
