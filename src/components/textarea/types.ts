// Generated with util/create-component.js
import React from "react";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

/** To be exposed for Form component inheritance */
export type TextareaPartialProps = Omit<TextareaProps, "error">;

export type TextareaRef = React.Ref<HTMLTextAreaElement>;
