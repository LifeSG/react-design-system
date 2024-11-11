export type RadioButtonSize = "small" | "default";
export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    displaySize?: RadioButtonSize | undefined;
}
