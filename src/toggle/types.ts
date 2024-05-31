export type ToggleType = "checkbox" | "radio" | "yes" | "no";
export type ToggleStyleType = "default" | "no-border";

export interface ToggleProps
    extends React.AriaAttributes,
        React.DOMAttributes<HTMLInputElement> {
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
    children: React.ReactNode;
    // /** The description label displayed below the main label */
    subLabel?: (() => JSX.Element) | JSX.Element | string | undefined;
    disabled?: boolean | undefined;
    /** Specifies if the error display should be present */
    error?: boolean | undefined;
    className?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onChange?:
        | ((event: React.ChangeEvent<HTMLInputElement>) => void)
        | undefined;
    compositeSection?: ToggleCompositeSectionProps | undefined;
}

export interface ToggleCompositeSectionProps {
    /** specifies to show or hide view more or less button when remove button is not present */
    collapsible?: boolean;
    /** specifies the list of errors that has to be shown inside the composite-option container when the show less button is clicked*/
    errorList?: string[] | JSX.Element | undefined;
    removable?: boolean | undefined;
    onRemove?: (() => void) | undefined;
    /** The children inside the composite option */
    children?: React.ReactNode;
    show?: boolean | undefined;
}
