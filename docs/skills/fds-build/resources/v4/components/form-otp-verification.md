# Form.OtpVerification

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Flows that require identity verification via a one-time password sent to a phone number or email address.
-   The component manages the full multi-step UI: input contact → send OTP → enter OTP → verify.

## Usage

### Email variant

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";
import { OtpVerificationState } from "@lifesg/react-design-system/otp-verification";

const EmailOtpExample = () => {
    const [otpState, setOtpState] = useState<OtpVerificationState>("default");
    const [email, setEmail] = useState("");

    return (
        <Form.OtpVerification
            label="Verify your email"
            type="email"
            emailValue={email}
            onEmailChange={setEmail}
            otpState={otpState}
            onOtpStateChange={setOtpState}
            onSendOtp={async () => {
                // Throw to surface the error inline — do NOT return an error string
                const res = await api.sendEmailOtp(email);
                if (!res.ok) throw new Error("Invalid email address");
            }}
            onVerifyOtp={async (otpInput) => {
                const res = await api.verifyOtp(otpInput);
                if (!res.ok)
                    throw new Error("Incorrect OTP. Please try again.");
            }}
            onResendOtp={async () => {
                const res = await api.sendEmailOtp(email);
                if (!res.ok) throw new Error("Could not resend OTP");
            }}
            verifyOtpCountdownTimer={300}
        />
    );
};
```

### Phone variant (`fixedCountry` required)

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";
import { OtpVerificationState } from "@lifesg/react-design-system/otp-verification";
import { PhoneNumberInputValue } from "@lifesg/react-design-system/phone-number-input";

const PhoneOtpExample = () => {
    const [otpState, setOtpState] = useState<OtpVerificationState>("default");
    const [phone, setPhone] = useState<PhoneNumberInputValue>({ number: "" });

    return (
        <Form.OtpVerification
            label="Verify your mobile number"
            type="phone-number"
            phoneNumberValue={phone}
            onPhoneNumberChange={setPhone}
            fixedCountry // required when type="phone-number"; hides country selector
            otpState={otpState}
            onOtpStateChange={setOtpState}
            onSendOtp={async () => {
                const res = await api.sendSmsOtp(phone.number);
                if (!res.ok) throw new Error("Invalid phone number");
            }}
            onVerifyOtp={async (otpInput) => {
                const res = await api.verifyOtp(otpInput);
                if (!res.ok)
                    throw new Error("Incorrect OTP. Please try again.");
            }}
            onResendOtp={async () => {
                const res = await api.sendSmsOtp(phone.number);
                if (!res.ok) throw new Error("Could not resend OTP");
            }}
            verifyOtpCountdownTimer={180}
        />
    );
};
```

**Key gotcha — callbacks must throw, not return error strings.**
The component catches the thrown error and displays `error.message` inline.
Returning a value (or nothing) always signals success and advances the state machine.

## Props

| Prop                      | Type                                                      | Default | Description                                                    |
| ------------------------- | --------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| `type`                    | `"phone-number" \| "email"`                               | —       | Verification channel                                           |
| `otpState`                | `"default" \| "sent" \| "verified"`                       | —       | Controlled state of the OTP flow                               |
| `onOtpStateChange`        | `(otpState: OtpVerificationState) => void`                | —       | Called when the flow state changes                             |
| `onSendOtp`               | `() => Promise<void>`                                     | —       | Called when the user requests an OTP; throw to show error      |
| `onVerifyOtp`             | `(otp: string) => Promise<void>`                          | —       | Called when the user submits the OTP; throw to show error      |
| `onResendOtp`             | `() => Promise<void>`                                     | —       | Called when the user requests a resend; throw to show error    |
| `sendOtpError`            | `string`                                                  | —       | Error message shown if OTP send fails                          |
| `sendOtpPlaceholder`      | `string`                                                  | —       | Placeholder for the contact input field                        |
| `verifyOtpError`          | `string`                                                  | —       | Error message shown if OTP verification fails                  |
| `verifyOtpTitle`          | `string`                                                  | —       | Title for the verify OTP section                               |
| `verifyOtpMessage`        | `string`                                                  | —       | Description for the verify OTP section                         |
| `verifyOtpCountdownTimer` | `number`                                                  | `60`    | Seconds before the resend button is re-enabled                 |
| `otpReminderInterval`     | `number`                                                  | `120`   | Seconds between accessibility reminder announcements           |
| `otpValue`                | `{ prefix?: string; separator?: string; value?: string }` | —       | Current OTP input value with optional display prefix/separator |
| `onOtpChange`             | `(value: string) => void`                                 | —       | Called when the OTP input value changes                        |
| `showVerifyOtpThumbnail`  | `boolean`                                                 | `false` | Shows a thumbnail in the verify OTP section                    |
| `verifyOtpIcon`           | `React.ReactNode`                                         | —       | Custom icon for the verify OTP section                         |
| `id`                      | `string`                                                  | —       | Unique identifier of the component                             |
| `className`               | `string`                                                  | —       | Class selector of the component                                |
| `data-testid`             | `string`                                                  | —       | Test identifier of the component                               |

## Phone-number-specific props

| Prop                  | Type                                     | Description                                            |
| --------------------- | ---------------------------------------- | ------------------------------------------------------ |
| `phoneNumberValue`    | `PhoneNumberInputValue`                  | Controlled phone number value                          |
| `onPhoneNumberChange` | `(value: PhoneNumberInputValue) => void` | Called when phone input changes                        |
| `fixedCountry`        | `true`                                   | Locks the country code; required for phone-number type |

## Email-specific props

| Prop            | Type                      | Description                     |
| --------------- | ------------------------- | ------------------------------- |
| `emailValue`    | `string`                  | Controlled email value          |
| `onEmailChange` | `(value: string) => void` | Called when email input changes |

## PhoneNumberInputValue

| Prop          | Type     | Description                 |
| ------------- | -------- | --------------------------- |
| `number`      | `string` | Phone number                |
| `countryCode` | `string` | Country code (e.g. `"+65"`) |

## Form-specific props

| Prop    | Type                       | Description |
| ------- | -------------------------- | ----------- |
| `label` | `string \| FormLabelProps` | Field label |

## Rules

-   Always supply a `label` so the field is accessible.
-   Control `otpState` externally and update it via `onOtpStateChange` — the component does not manage its own state.
-   `onSendOtp`, `onVerifyOtp`, and `onResendOtp` must be async functions; throw an error inside them to trigger the corresponding error display (`sendOtpError`, `verifyOtpError`).
-   Always pass `fixedCountry` when `type="phone-number"` — the prop is required to lock the country selector.
-   Set `verifyOtpCountdownTimer` to match the actual OTP expiry window from your backend.
-   Pass `sendOtpError` and `verifyOtpError` from server responses so users receive actionable feedback.
-   `otpState` is externally controlled — the component does not manage its own flow state.
-   `fixedCountry` is required when `type="phone-number"`.

## Anti-patterns

-   Do not try to manage the step sequence manually — use `otpState` and let `onOtpStateChange` drive transitions.
-   Do not use for non-identity-verification scenarios — for simple code inputs, use a plain `Form.Input`.
-   Do not omit `fixedCountry` for `type="phone-number"` — the country selector will be shown unexpectedly.
-   Do not use synchronous functions for `onSendOtp`, `onVerifyOtp`, or `onResendOtp` — they must return Promises.
