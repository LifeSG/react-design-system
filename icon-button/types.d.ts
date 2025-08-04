export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    styleType?: StyleType;
    sizeType?: SizeType;
}
export type StyleType = "primary" | "secondary" | "light";
export type SizeType = "large" | "default" | "small";
