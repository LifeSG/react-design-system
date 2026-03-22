import React from "react";

/**
 * Props for the Input component - single-line text entry field.
 *
 * Extends all standard HTML `<input>` attributes. Use for free-text, numeric,
 * email, telephone, or search entry in forms. Supports optional clear button,
 * error state, and a borderless style variant.
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter name" error={hasError} allowClear />
 * ```
 * @keywords text field, text box, single line input, search field, text entry
 */
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Sets the number of characters between auto-inserted spaces.
     *
     * Only applies when `type="tel"`. Use to format telephone numbers as the
     * user types (e.g., spacing every 4 digits).
     *
     * @default undefined
     */
    spacing?: number | undefined;
    /**
     * Applies error styling to indicate invalid input.
     *
     * @default false
     */
    error?: boolean | undefined;
    /**
     * Shows a clear (×) button inside the input when it has a value.
     *
     * @default false
     */
    allowClear?: boolean | undefined;
    /**
     * Called when the user clicks the clear button.
     *
     * @default undefined
     */
    onClear?: () => void | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the element in automated tests.
     */
    "data-testid"?: string | undefined;
    /**
     * Controls the visual border style of the input.
     *
     * - `"bordered"`: Standard input with a visible border.
     * - `"no-border"`: Removes the border for an inline or minimal appearance.
     *
     * @default undefined
     */
    styleType?: "no-border" | "bordered" | undefined;
}

/** To be exposed for Form component inheritance */
export type InputPartialProps = Omit<InputProps, "error">;

export type InputRef = React.Ref<HTMLInputElement>;
