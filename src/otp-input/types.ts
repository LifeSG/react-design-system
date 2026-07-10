import type { ButtonProps } from "../button";

/**
 * Props for the `OtpInput` component.
 */
export interface OtpInputProps extends React.AriaAttributes {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /**
     * Controlled array of digit strings, one entry per input cell.
     * Only applied when the array length equals `numOfInput`.
     */
    value?: string[] | undefined;
    /**
     * Error text displayed below the input cells.
     */
    errorMessage?: string | React.ReactNode | undefined;
    /**
     * Duration in seconds to disable the action button after it is clicked.
     * Pass `0` to skip the cooldown entirely.
     */
    cooldownDuration: number;
    /**
     * Props forwarded to the action button. When `children` is not provided,
     * the button label defaults to `"Resend OTP"`, or `"Resend OTP in X seconds"`
     * while a cooldown is active.
     *
     * @default styleType: "secondary"
     */
    actionButtonProps?: ButtonProps | undefined;
    /**
     * When `true`, renders only the OTP input cells without the action button.
     */
    otpOnly?: boolean | undefined;
    /**
     * Number of single-digit input cells to render.
     */
    numOfInput: number;
    /**
     * Optional prefix label rendered before the input cells.
     */
    prefix?:
        | {
              /** Prefix text, usually a few alphabetic characters. */
              value: string;
              /**
               * Separator between the prefix and the OTP input.
               * Only `"-"` is supported.
               */
              separator: "-";
          }
        | undefined;
    /**
     * Called when any input cell changes.
     *
     * @param value Array of all input cell values, one string per cell.
     */
    onChange?: ((value: string[]) => void) | undefined;
    /**
     * Called each second while a cooldown countdown is active.
     *
     * @param remaining Seconds remaining in the current cooldown.
     */
    onCountdownChange?: ((remaining: number) => void) | undefined;
    /** Called when a cooldown period begins. */
    onCooldownStart?: (() => void) | undefined;
    /** Called when a cooldown period ends. */
    onCooldownEnd?: (() => void) | undefined;
}

/**
 * Imperative handle returned by `OtpInput` via `ref`.
 */
export type OtpInputRef = {
    /**
     * Starts a new cooldown countdown without clearing the input cells.
     * Fires `onCooldownStart` and begins the countdown timer.
     */
    startCooldown: () => void;
};
