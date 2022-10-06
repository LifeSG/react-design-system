import React from "react";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean | undefined;
    "data-testid"?: string | undefined;
}

/** To be exposed for Form component inheritance */
export type TextareaPartialProps = Omit<TextareaProps, "error">;

export type TextareaRef = React.Ref<HTMLTextAreaElement>;
