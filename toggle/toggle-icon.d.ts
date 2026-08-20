export type ToggleIconType = "checkbox" | "radio" | "tick" | "cross";
export interface ToggleIconProps {
    type: ToggleIconType;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    className?: string | undefined;
}
export declare const ToggleIcon: ({ type, active, disabled, className, error, }: ToggleIconProps) => import("react/jsx-runtime").JSX.Element;
