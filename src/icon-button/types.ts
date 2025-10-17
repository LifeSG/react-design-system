export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    styleType?: StyleType;
    sizeType?: SizeType;
    focusableWhenDisabled?: boolean | undefined;
}

export type StyleType = "primary" | "secondary" | "light" | "disabled";

export type SizeType = "large" | "default" | "small";
