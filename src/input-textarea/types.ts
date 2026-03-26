import React from "react";

/**
 * Props for the Textarea component, a multi-line text entry field extending standard HTML textarea attributes.
 *
 * @keywords textarea, multi-line, text-field, input, form, character-count
 */
export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Applies error styling to indicate an invalid value. */
    error?: boolean | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Optional function to transform the input value before it is applied. */
    transformValue?: ((value: string) => string) | undefined;
    /** Static prefix text displayed before the textarea content. */
    prefix?: string | undefined;
    /** Renders a custom character counter element using the current max length and value length. */
    renderCustomCounter?:
        | ((maxLength: number, currentValueLength: number) => JSX.Element)
        | undefined;
}

/** To be exposed for Form component inheritance */
export type TextareaPartialProps = Omit<TextareaProps, "error">;

export type TextareaRef = React.Ref<HTMLTextAreaElement>;
