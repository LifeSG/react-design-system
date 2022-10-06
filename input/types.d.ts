import React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Sets the number of characters before a space is added (works only with type `tel` input) */
    spacing?: number | undefined;
    error?: boolean | undefined;
    "data-testid"?: string | undefined;
}
/** To be exposed for Form component inheritance */
export declare type InputPartialProps = Omit<InputProps, "error">;
export declare type InputRef = React.Ref<HTMLInputElement>;
