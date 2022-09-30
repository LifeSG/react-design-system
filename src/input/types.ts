import React from "react";

export type InputType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | "readonly";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: InputType | undefined;
    spacing?: number | undefined;
    error?: boolean | undefined;
    "data-testid"?: string | undefined;
}

/** To be exposed for Form component inheritance */
export type InputPartialProps = Omit<InputProps, "error">;

export type InputRef = React.Ref<HTMLInputElement>;
