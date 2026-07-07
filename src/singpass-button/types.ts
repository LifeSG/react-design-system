import type React from "react";

export type SingpassButtonStyleType = "red-filled" | "white-filled";

export type SingpassButtonSizeType = "default" | "small" | "large";

export interface SingpassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    /** The style type of the button. Values: "red-filled" | "white-filled" */
    styleType?: SingpassButtonStyleType | undefined;
    /** The size type of the button. Values: "default" | "small" | "large" */
    sizeType?: SingpassButtonSizeType | undefined;
}

export type SingpassButtonRef = React.Ref<HTMLButtonElement>;
