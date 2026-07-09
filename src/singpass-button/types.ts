import type React from "react";

/**
 * Visual style variant of the Singpass button.
 *
 * - `"red-filled"` — Singpass red background with white logo.
 * - `"white-filled"` — white background with red logo.
 */
export type SingpassButtonStyleType = "red-filled" | "white-filled";

/**
 * Size variant of the Singpass button.
 *
 * - `"default"` — standard button size.
 * - `"small"` — compact button size.
 * - `"large"` — expanded button size.
 */
export type SingpassButtonSizeType = "default" | "small" | "large";

/**
 * Props for the Singpass-branded login button.
 */
export interface SingpassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    /**
     * Visual style variant controlling the button background and logo colour.
     *
     * @default "white-filled"
     */
    styleType?: SingpassButtonStyleType | undefined;
    /**
     * Size variant of the button.
     *
     * @default "default"
     */
    sizeType?: SingpassButtonSizeType | undefined;
}

/**
 * Ref type for the underlying `<button>` element rendered by `SingpassButton`.
 */
export type SingpassButtonRef = React.Ref<HTMLButtonElement>;
