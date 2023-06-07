export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    focusHighlight?: boolean;
    focusOutline?: "none" | "browser";
    buttonStyle?: ButtonStyle;
    sizeType?: SizeType;
}

export type ButtonStyle = "primary" | "secondary" | "light" | "disabled";

export type SizeType = "large" | "default" | "small";
