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
    /** The number of lines visible. Additional lines will be truncated */
    childrenMaxLines?:
        | {
              mobile?: number | undefined;
              desktop?: number | undefined;
              tablet?: number | undefined;
          }
        | undefined;
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
    /** The Toggle subsection */
    compositeSection?: ToggleCompositeSectionProps | undefined;
    /** Specifies if the remove button should be displayed */
    removable?: boolean | undefined;
    onRemove?: (() => void) | undefined;
}

export interface ToggleCompositeSectionProps {
    children: React.ReactNode;
    /** Specifies if the subsection is visible. Remains mounted */
    show?: boolean | undefined;
    /** Specifies if the subsection is collapsible */
    collapsible?: boolean | undefined;
    /** The initial expanded state. Only applicable if collapsible */
    initialExpanded?: boolean | undefined;
    /** Specifies errors to be displayed when the subsection is collapsed */
    errors?: string[] | JSX.Element | undefined;
}
