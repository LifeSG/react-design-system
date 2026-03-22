import React from "react";

/**
 * Props for the InputTextarea component - multi-line text entry field.
 *
 * Extends all standard HTML `<textarea>` attributes. Use when the user needs to
 * enter more than one line of text, such as comments, descriptions, or messages.
 * Supports character count display and error state.
 *
 * @example
 * ```tsx
 * <InputTextarea
 *     maxLength={200}
 *     placeholder="Enter your message..."
 *     error={hasError}
 * />
 * ```
 * @keywords multiline, text area, comment box, description field, paragraph input
 */
export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Applies error styling to indicate invalid input.
     *
     * @default false
     */
    error?: boolean | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the element in automated tests.
     */
    "data-testid"?: string | undefined;
    /**
     * Renders a custom character counter below the textarea.
     *
     * Called with the `maxLength` value and the current character count. Use
     * when the default counter style does not match your design requirements.
     *
     * @param maxLength - The maximum number of characters allowed.
     * @param currentValueLength - The current number of characters entered.
     *
     * @default undefined
     */
    renderCustomCounter?:
        | ((maxLength: number, currentValueLength: number) => JSX.Element)
        | undefined;
}

/** To be exposed for Form component inheritance */
export type TextareaPartialProps = Omit<TextareaProps, "error">;

export type TextareaRef = React.Ref<HTMLTextAreaElement>;
