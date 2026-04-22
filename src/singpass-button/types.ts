import React from "react";

export type SingpassButtonStyleType = "red-filled" | "white-filled";

/**
 * The call to action for Singpass login, following the official Singpass button guidelines.
 *
 * @keywords singpass, login, authentication, button, cta
 */
export interface SingpassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The style type of the button. Values: "red-filled" | "white-filled" */
    styleType?: SingpassButtonStyleType | undefined;
}

export type SingpassButtonRef = React.Ref<HTMLButtonElement>;
