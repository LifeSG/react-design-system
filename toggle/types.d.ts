/// <reference types="react" />
export type ToggleType = "checkbox" | "radio" | "yes" | "no";
export type ToggleStyleType = "default" | "no-border";
export interface ToggleProps extends React.AriaAttributes, React.DOMAttributes<HTMLInputElement> {
    /**
     * The type of toggle. Values: "checkbox" | "radio" | "yes" | "no"
     *
     * "checkbox" - allows deselection
     *
     * "radio", "yes", "no" - does not allow deselection. However they
     * will determine the indicator to be displayed
     */
    type?: ToggleType | undefined;
    /** Specifies if the indicator icon should be displayed */
    indicator?: boolean | undefined;
    /** Indicates if the element is checked */
    checked?: boolean | undefined;
    /** The style type of the Toggle. Values: "default" | "no-border" */
    styleType?: ToggleStyleType | undefined;
    /** The Toggle label */
    children: string;
    disabled?: boolean | undefined;
    /** Specifies if the error display should be present */
    error?: boolean | undefined;
    className?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}
