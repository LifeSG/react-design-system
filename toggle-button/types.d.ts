/// <reference types="react" />
export declare type ToggleButtonType = "checkbox" | "radio";
export interface ToggleButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string;
    /** The ToggleButton type. Values: "checkbox" | "radio" */
    type?: ToggleButtonType | undefined;
}
