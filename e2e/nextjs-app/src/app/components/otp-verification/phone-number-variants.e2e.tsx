"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.OtpVerification
                data-testid="otp-phone-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                type="phone-number"
                otpState="default"
                onOtpStateChange={() => {}}
                phoneNumberValue={{ countryCode: "+65" }}
                fixedCountry
            />
            <Form.OtpVerification
                data-testid="otp-phone-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                type="phone-number"
                otpState="default"
                onOtpStateChange={() => {}}
                phoneNumberValue={{ countryCode: "+65" }}
                disabled
                fixedCountry
            />
            <Form.OtpVerification
                data-testid="otp-phone-readonly"
                label={{
                    children: "Read only",
                    subtitle: "This is the subtitle",
                }}
                type="phone-number"
                otpState="default"
                onOtpStateChange={() => {}}
                phoneNumberValue={{ countryCode: "+65" }}
                readOnly
                fixedCountry
            />
            <Form.OtpVerification
                data-testid="otp-phone-error"
                label={{
                    children: "Contact error",
                    subtitle: "This is the subtitle",
                }}
                type="phone-number"
                otpState="default"
                onOtpStateChange={() => {}}
                phoneNumberValue={{ countryCode: "+65" }}
                sendOtpError="Please enter a valid phone number"
                fixedCountry
            />
        </div>
    );
}
