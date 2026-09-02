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

## Props

| Prop                      | Type                                                                                                                                                                                                                                      | Default | Description                                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                      | `string`                                                                                                                                                                                                                                  | —       | —                                                                                                                                                |
| `disabled`                | `boolean`                                                                                                                                                                                                                                 | —       | —                                                                                                                                                |
| `readOnly`                | `boolean`                                                                                                                                                                                                                                 | —       | —                                                                                                                                                |
| `className`               | `string`                                                                                                                                                                                                                                  | —       | —                                                                                                                                                |
| `inputId`                 | `string`                                                                                                                                                                                                                                  | —       | The `id` attribute applied to the contact input field.                                                                                           |
| `otpState` \*             | `OtpVerificationState`                                                                                                                                                                                                                    | —       | The current step in the OTP verification flow. Controls which sections are rendered.                                                             |
| `onOtpStateChange` \*     | `(state: OtpVerificationState) => void`                                                                                                                                                                                                   | —       | Called when the component transition to a new `otpState`.                                                                                        |
| `onSendOtp`               | `(() => Promise<void>)`                                                                                                                                                                                                                   | —       | Called when the user initiates sending the OTP. On resolution, the component transitions to `"sent"`.                                            |
| `sendOtpError`            | `string`                                                                                                                                                                                                                                  | —       | Error message displayed below the contact input after a failed attempt.                                                                          |
| `sendOtpPlaceholder`      | `string`                                                                                                                                                                                                                                  | —       | Placeholder text for the contact input field.                                                                                                    |
| `otpReminderInterval`     | `number`                                                                                                                                                                                                                                  | 120     | Interval in seconds at which an accessibility announcement is made, reminding the user how many seconds remain before they can resend the OTP.   |
| `type` \*                 | `"email"`                                                                                                                                                                                                                                 | —       | Discriminant that sets the contact input to email mode.                                                                                          |
| `otpValue`                | `\| { /** * Static text displayed before the OTP input. */ prefix?: string; /** * Character displayed between the `prefix` and OTP input.. */ separator?: string; /** * The current OTP string entered by the user. */ value?: string; }` | —       | Controlled state of the OTP input field.                                                                                                         |
| `onOtpChange`             | `((value: string) => void)`                                                                                                                                                                                                               | —       | Called when the OTP input value changes.                                                                                                         |
| `onVerifyOtp`             | `((input: string) => Promise<void>)`                                                                                                                                                                                                      | —       | Called when the user submits the OTP for verification. On resolution the component transitions to `"verified"`.                                  |
| `verifyOtpCountdownTimer` | `number`                                                                                                                                                                                                                                  | 60      | Duration in seconds of the resend cooldown after an OTP is sent.                                                                                 |
| `onResendOtp`             | `(() => Promise<void>)`                                                                                                                                                                                                                   | —       | Called when the user requests to resend the OTP from the verification step.                                                                      |
| `showVerifyOtpThumbnail`  | `boolean`                                                                                                                                                                                                                                 | —       | Whether to display the thumbnail image in the OTP verification section, visible in the `"sent"` state.                                           |
| `verifyOtpIcon`           | `React.ReactNode`                                                                                                                                                                                                                         | —       | Custom icon in the OTP verification section, visible in the `"sent"` state.                                                                      |
| `verifyOtpTitle`          | `string`                                                                                                                                                                                                                                  | —       | Custom heading in the OTP verification section, visible in the `"sent"` state.                                                                   |
| `verifyOtpMessage`        | `string`                                                                                                                                                                                                                                  | —       | Custom body text in the OTP verification section, visible in the `"sent"` state.                                                                 |
| `verifyOtpError`          | `string`                                                                                                                                                                                                                                  | —       | Error message displayed below the OTP input after a failed verification attempt.                                                                 |
| `label`                   | `FormLabelProps \| string`                                                                                                                                                                                                                | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `layoutType`              | `FormElementLayoutType`                                                                                                                                                                                                                   | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                      | Type                                                                                                                                                                                                                                      | Default | Description                                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                      | `string`                                                                                                                                                                                                                                  | —       | —                                                                                                                                                |
| `disabled`                | `boolean`                                                                                                                                                                                                                                 | —       | —                                                                                                                                                |
| `readOnly`                | `boolean`                                                                                                                                                                                                                                 | —       | —                                                                                                                                                |
| `className`               | `string`                                                                                                                                                                                                                                  | —       | —                                                                                                                                                |
| `inputId`                 | `string`                                                                                                                                                                                                                                  | —       | The `id` attribute applied to the contact input field.                                                                                           |
| `otpState` \*             | `OtpVerificationState`                                                                                                                                                                                                                    | —       | The current step in the OTP verification flow. Controls which sections are rendered.                                                             |
| `onOtpStateChange` \*     | `(state: OtpVerificationState) => void`                                                                                                                                                                                                   | —       | Called when the component transition to a new `otpState`.                                                                                        |
| `onSendOtp`               | `(() => Promise<void>)`                                                                                                                                                                                                                   | —       | Called when the user initiates sending the OTP. On resolution, the component transitions to `"sent"`.                                            |
| `sendOtpError`            | `string`                                                                                                                                                                                                                                  | —       | Error message displayed below the contact input after a failed attempt.                                                                          |
| `sendOtpPlaceholder`      | `string`                                                                                                                                                                                                                                  | —       | Placeholder text for the contact input field.                                                                                                    |
| `otpReminderInterval`     | `number`                                                                                                                                                                                                                                  | 120     | Interval in seconds at which an accessibility announcement is made, reminding the user how many seconds remain before they can resend the OTP.   |
| `type` \*                 | `"email"`                                                                                                                                                                                                                                 | —       | Discriminant that sets the contact input to email mode.                                                                                          |
| `otpValue`                | `\| { /** * Static text displayed before the OTP input. */ prefix?: string; /** * Character displayed between the `prefix` and OTP input.. */ separator?: string; /** * The current OTP string entered by the user. */ value?: string; }` | —       | Controlled state of the OTP input field.                                                                                                         |
| `onOtpChange`             | `((value: string) => void)`                                                                                                                                                                                                               | —       | Called when the OTP input value changes.                                                                                                         |
| `onVerifyOtp`             | `((input: string) => Promise<void>)`                                                                                                                                                                                                      | —       | Called when the user submits the OTP for verification. On resolution the component transitions to `"verified"`.                                  |
| `verifyOtpCountdownTimer` | `number`                                                                                                                                                                                                                                  | 60      | Duration in seconds of the resend cooldown after an OTP is sent.                                                                                 |
| `onResendOtp`             | `(() => Promise<void>)`                                                                                                                                                                                                                   | —       | Called when the user requests to resend the OTP from the verification step.                                                                      |
| `showVerifyOtpThumbnail`  | `boolean`                                                                                                                                                                                                                                 | —       | Whether to display the thumbnail image in the OTP verification section, visible in the `"sent"` state.                                           |
| `verifyOtpIcon`           | `React.ReactNode`                                                                                                                                                                                                                         | —       | Custom icon in the OTP verification section, visible in the `"sent"` state.                                                                      |
| `verifyOtpTitle`          | `string`                                                                                                                                                                                                                                  | —       | Custom heading in the OTP verification section, visible in the `"sent"` state.                                                                   |
| `verifyOtpMessage`        | `string`                                                                                                                                                                                                                                  | —       | Custom body text in the OTP verification section, visible in the `"sent"` state.                                                                 |
| `verifyOtpError`          | `string`                                                                                                                                                                                                                                  | —       | Error message displayed below the OTP input after a failed verification attempt.                                                                 |
| `label`                   | `FormLabelProps \| string`                                                                                                                                                                                                                | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `layoutType`              | `FormElementLayoutType`                                                                                                                                                                                                                   | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                      | Type                                                                                                                                                                                                                                      | Default | Description                                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                      | `string`                                                                                                                                                                                                                                  | —       | —                                                                                                                                                |
| `disabled`                | `boolean`                                                                                                                                                                                                                                 | —       | —                                                                                                                                                |
| `readOnly`                | `boolean`                                                                                                                                                                                                                                 | —       | —                                                                                                                                                |
| `className`               | `string`                                                                                                                                                                                                                                  | —       | —                                                                                                                                                |
| `inputId`                 | `string`                                                                                                                                                                                                                                  | —       | The `id` attribute applied to the contact input field.                                                                                           |
| `otpState` \*             | `OtpVerificationState`                                                                                                                                                                                                                    | —       | The current step in the OTP verification flow. Controls which sections are rendered.                                                             |
| `onOtpStateChange` \*     | `(state: OtpVerificationState) => void`                                                                                                                                                                                                   | —       | Called when the component transition to a new `otpState`.                                                                                        |
| `onSendOtp`               | `(() => Promise<void>)`                                                                                                                                                                                                                   | —       | Called when the user initiates sending the OTP. On resolution, the component transitions to `"sent"`.                                            |
| `sendOtpError`            | `string`                                                                                                                                                                                                                                  | —       | Error message displayed below the contact input after a failed attempt.                                                                          |
| `sendOtpPlaceholder`      | `string`                                                                                                                                                                                                                                  | —       | Placeholder text for the contact input field.                                                                                                    |
| `otpReminderInterval`     | `number`                                                                                                                                                                                                                                  | 120     | Interval in seconds at which an accessibility announcement is made, reminding the user how many seconds remain before they can resend the OTP.   |
| `type` \*                 | `"email"`                                                                                                                                                                                                                                 | —       | Discriminant that sets the contact input to email mode.                                                                                          |
| `otpValue`                | `\| { /** * Static text displayed before the OTP input. */ prefix?: string; /** * Character displayed between the `prefix` and OTP input.. */ separator?: string; /** * The current OTP string entered by the user. */ value?: string; }` | —       | Controlled state of the OTP input field.                                                                                                         |
| `onOtpChange`             | `((value: string) => void)`                                                                                                                                                                                                               | —       | Called when the OTP input value changes.                                                                                                         |
| `onVerifyOtp`             | `((input: string) => Promise<void>)`                                                                                                                                                                                                      | —       | Called when the user submits the OTP for verification. On resolution the component transitions to `"verified"`.                                  |
| `verifyOtpCountdownTimer` | `number`                                                                                                                                                                                                                                  | 60      | Duration in seconds of the resend cooldown after an OTP is sent.                                                                                 |
| `onResendOtp`             | `(() => Promise<void>)`                                                                                                                                                                                                                   | —       | Called when the user requests to resend the OTP from the verification step.                                                                      |
| `showVerifyOtpThumbnail`  | `boolean`                                                                                                                                                                                                                                 | —       | Whether to display the thumbnail image in the OTP verification section, visible in the `"sent"` state.                                           |
| `verifyOtpIcon`           | `React.ReactNode`                                                                                                                                                                                                                         | —       | Custom icon in the OTP verification section, visible in the `"sent"` state.                                                                      |
| `verifyOtpTitle`          | `string`                                                                                                                                                                                                                                  | —       | Custom heading in the OTP verification section, visible in the `"sent"` state.                                                                   |
| `verifyOtpMessage`        | `string`                                                                                                                                                                                                                                  | —       | Custom body text in the OTP verification section, visible in the `"sent"` state.                                                                 |
| `verifyOtpError`          | `string`                                                                                                                                                                                                                                  | —       | Error message displayed below the OTP input after a failed verification attempt.                                                                 |
| `label`                   | `FormLabelProps \| string`                                                                                                                                                                                                                | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `layoutType`              | `FormElementLayoutType`                                                                                                                                                                                                                   | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                                                                                                                                                                                                                 | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

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
