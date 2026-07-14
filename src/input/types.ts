import type React from "react";

/**
 * Visual style variant for the `Input` component.
 *
 * - `"bordered"` wraps the input in a styled border container.
 * - `"no-border"` omits the border wrapper.
 */
export type InputStyleType = "no-border" | "bordered";

/**
 * Props for the `Input` component.
 */
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Inserts a space after every `spacing` characters in the displayed value.
     * Only applies when `type` is `"tel"`.
     */
    spacing?: number | undefined;
    /**
     * Marks the input wrapper in an error state.
     */
    error?: boolean | undefined;
    /**
     * Shows a clear button when the field has a value and is neither disabled
     * nor read-only.
     *
     * @default false
     */
    allowClear?: boolean | undefined;
    /**
     * Called when the user activates the clear button. Use this to clear the
     * controlled value.
     */
    onClear?: () => void | undefined;
    "data-testid"?: string | undefined;
    /**
     * Visual style variant.
     *
     * @default "bordered"
     */
    styleType?: InputStyleType | undefined;
}

/**
 * A subset of `InputProps` for use by form components that manage the `error`
 * state themselves.
 */
export type InputPartialProps = Omit<InputProps, "error">;

/**
 * Ref type for programmatic access to the underlying `HTMLInputElement`.
 */
export type InputRef = React.Ref<HTMLInputElement>;
