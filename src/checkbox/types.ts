export type CheckboxSize = "small" | "default";
export type CheckBoxStatus = boolean | "mixed";

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "checked"> {
    /** The display sizes of the Checkbox. "small" | "default" */
    displaySize?: CheckboxSize | undefined;
    /** Checked statues */
    checked?: CheckBoxStatus | undefined;
}
