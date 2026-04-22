export type ToggleType = "checkbox" | "radio" | "yes" | "no";
export type ToggleStyleType = "default" | "no-border";

/**
 * Props for the Toggle component - checkbox/radio selection control.
 *
 * Renders a styled toggle button that acts as a checkbox (allows
 * deselection) or radio button (no deselection). The `type` prop controls
 * behaviour and indicator icon.
 *
 * @example
 * ```tsx
 * <Toggle
 *     type="checkbox"
 *     checked={agreed}
 *     onChange={(e) => setAgreed(e.target.checked)}
 * >
 *     I agree to the terms and conditions
 * </Toggle>
 * ```
 * @keywords toggle button, selection tile, yes no button, choice button, styled checkbox
 */
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
    /** Secondary description label displayed below the main label. */
    subLabel?: (() => JSX.Element) | JSX.Element | string | undefined;
    /** When `true`, the toggle is disabled and cannot be interacted with. */
    disabled?: boolean | undefined;
    /** Specifies if the error display should be present */
    error?: boolean | undefined;
    /** Additional CSS class names applied to the root element. */
    className?: string | undefined;
    /** Name attribute used when the toggle is part of a form. */
    name?: string | undefined;
    /** Unique HTML identifier for the root element. */
    id?: string | undefined;
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
    /** Called when the checked state changes. */
    onChange?:
        | ((event: React.ChangeEvent<HTMLInputElement>) => void)
        | undefined;
    /** The Toggle subsection */
    compositeSection?: ToggleCompositeSectionProps | undefined;
    /** Specifies if the remove button should be displayed */
    removable?: boolean | undefined;
    /** Called when the remove button is clicked. */
    onRemove?: (() => void) | undefined;
    /** Changes min-width to fit content */
    useContentWidth?: boolean | undefined;
}

/**
 * Props for the collapsible subsection rendered beneath a Toggle.
 */
export interface ToggleCompositeSectionProps {
    /** The content of the subsection. */
    children: React.ReactNode;
    /** Specifies if the subsection is collapsible */
    collapsible?: boolean | undefined;
    /** The initial expanded state. Only applicable if collapsible */
    initialExpanded?: boolean | undefined;
    /** Specifies errors to be displayed when the subsection is collapsed */
    errors?: string[] | JSX.Element | undefined;
}
