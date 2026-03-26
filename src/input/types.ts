import React from "react";

/** Visual style variant for the input field. `"bordered"` renders a full border; `"no-border"` removes it. */
export type InputStyleType = "no-border" | "bordered";

/**
 * A single-line text entry field extending standard HTML input attributes.
 * Provides optional clear button, error state, telephone spacing, and style variants.
 *
 * @keywords input, text-field, form, clear, error, single-line
 */
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Sets the number of characters before a space is inserted automatically. Only applies to inputs of type `tel`. */
    spacing?: number | undefined;
    /** Applies error styling to indicate an invalid value. */
    error?: boolean | undefined;
    /** Shows a clear (×) button inside the field when the field has a value. */
    allowClear?: boolean | undefined;
    /** Called when the clear button is clicked. */
    onClear?: () => void | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Visual style variant for the field border. @default "bordered" */
    styleType?: InputStyleType | undefined;
}

/** To be exposed for Form component inheritance */
export type InputPartialProps = Omit<InputProps, "error">;

export type InputRef = React.Ref<HTMLInputElement>;
