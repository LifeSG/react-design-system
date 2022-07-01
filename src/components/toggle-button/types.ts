export interface ToggleButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string;
    /* Override prop to limit to 2 types */
    type?: "checkbox" | "radio";
}
