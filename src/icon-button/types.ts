export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    focusHighlight?: boolean;
    focusOutline?: "none" | "browser";
    buttonStyle?: ButtonStyle;
    sizeType?: SizeType;
}

export type ButtonStyle = "primary" | "secondary" | "light" | "disabled";

export type SizeType = "large" | "default" | "small";
