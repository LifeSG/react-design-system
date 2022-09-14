export type CheckboxSize = "small" | "default";

export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /** The display sizes of the Checkbox. "small" | "default" */
    displaySize?: CheckboxSize | undefined;
}
