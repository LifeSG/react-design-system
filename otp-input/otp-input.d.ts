import type React from "react";
import type { OtpInputProps, OtpInputRef } from "./types";
/**
 * A field composed of individual inputs for a numeric one-time password
 * with an in-built countdown mechanism.
 *
 * Use `OtpInput` when users must enter the one-time password (OTP)
 * for multi-factored authentication methods.
 * @keywords 2FA, authentication, code, MFA, one-time password, verification
 */
export declare const OtpInput: (props: OtpInputProps & React.RefAttributes<OtpInputRef>) => React.ReactElement | null;
