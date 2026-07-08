import type React from "react";

/**
 * Props for the `Textarea` component.
 */
export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Renders the input in an error state. */
    error?: boolean | undefined;
    "data-testid"?: string | undefined;
    /**
     * Transforms user input on every change event.
     */
    transformValue?: ((value: string) => string) | undefined;
    /**
     * A read-only string permanently displayed at the start of the textarea.
     */
    prefix?: string | undefined;
    /**
     * Replaces the built-in character counter displayed below the textarea.
     * Called only when `maxLength` is provided.
     *
     * @param maxLength The maximum number of user-input characters allowed.
     * @param currentValueLength The current length of the user's input.
     */
    renderCustomCounter?:
        | ((maxLength: number, currentValueLength: number) => JSX.Element)
        | undefined;
}

/**
 * A subset of `TextareaProps` used by form components that manage
 * the `error` state themselves.
 */
export type TextareaPartialProps = Omit<TextareaProps, "error">;

/**
 * Ref type for programmatic access to the underlying `HTMLTextAreaElement`.
 */
export type TextareaRef = React.Ref<HTMLTextAreaElement>;
