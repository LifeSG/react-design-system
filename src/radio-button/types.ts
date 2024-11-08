export type RadioboxSize = "small" | "default";
export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    displaySize?: RadioboxSize | undefined;
}
