import React from "react";

export type SingpassButtonStyleType = "red-filled" | "white-filled";

export interface SingpassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    /** The style type of the button. Values: "red-filled" | "white-filled" */
    styleType?: SingpassButtonStyleType | undefined;
}

export type SingpassButtonRef = React.Ref<HTMLButtonElement>;
