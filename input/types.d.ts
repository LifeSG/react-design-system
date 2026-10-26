import React from "react";
export type InputStyleType = "no-border" | "bordered";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Sets the number of characters before a space is added (works only with type `tel` input) */
    spacing?: number | undefined;
    error?: boolean | undefined;
    allowClear?: boolean | undefined;
    onClear?: () => void | undefined;
    "data-testid"?: string | undefined;
    styleType?: InputStyleType | undefined;
}
/** To be exposed for Form component inheritance */
export type InputPartialProps = Omit<InputProps, "error">;
export type InputRef = React.Ref<HTMLInputElement>;
