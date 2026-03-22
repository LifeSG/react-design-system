export type BoxContainerDisplayState = "default" | "error" | "warning";

export interface BoxContainerSubComponentTestIds {
    title?: string | undefined;
    handle?: string | undefined;
    displayStateIcon?: string | undefined;
}

/**
 * Props for the BoxContainer component - collapsible titled card.
 *
 * Renders a bordered box with a header title and optionally a status icon,
 * call-to-action element, and expand/collapse toggle.
 *
 * @example
 * ```tsx
 * <BoxContainer title="Personal Details" collapsible expanded>
 *     <FormContent />
 * </BoxContainer>
 * ```
 * @keywords collapsible card, expandable section, titled panel, bordered box
 */
export interface BoxContainerProps {
    /** The content to render inside the box. */
    children: JSX.Element | JSX.Element[];
    /** The label text displayed in the box header. */
    title: string;
    /**
     * Specifies if the contents can be collapsed or expanded.
     *
     * @default true
     */
    collapsible?: boolean | undefined;
    /**
     * Controls the expand/collapse state. Only applicable when `collapsible` is `true`.
     *
     * @default false
     */
    expanded?: boolean | undefined;
    /** A custom element rendered in the header alongside the title (e.g., an Edit button). */
    callToActionComponent?: JSX.Element | undefined;
    /**
     * Renders a status icon in the header.
     *
     * @default "default"
     */
    displayState?: BoxContainerDisplayState | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** Test identifiers for sub-elements (title label, handle button, state icon). */
    subComponentTestIds?: BoxContainerSubComponentTestIds | undefined;
    /** The test identifier for the component root element. */
    "data-testid"?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
}
