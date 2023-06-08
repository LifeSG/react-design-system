export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    buttonStyle?: ButtonStyle;
    sizeType?: SizeType;
}

export type ButtonStyle = "primary" | "secondary" | "light" | "disabled";

export type SizeType = "large" | "default" | "small";
