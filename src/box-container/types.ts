export type BoxContainerDisplayState = "default" | "error" | "warning";

/** Test ID overrides for sub-elements within BoxContainer. */
export interface BoxContainerSubComponentTestIds {
    /** The id used for the header title */
    title?: string | undefined;
    /** The id used for the expand and collapse handle */
    handle?: string | undefined;
    /** The id used for the display state icon in the header */
    displayStateIcon?: string | undefined;
}

/**
 * Displays contents in a box styling layout that can be collapsible if specified.
 *
 * @keywords box, container, collapsible, expandable, card, panel
 */
export interface BoxContainerProps {
    /** The content of the component */
    children: JSX.Element | JSX.Element[];
    /** The label text for the header */
    title: string | JSX.Element;
    /** Specifies if the contents can be collapsed or expanded. @default true */
    collapsible?: boolean | undefined;
    /** Specifies if contents are expanded. Only valid if `collapsible` is set to `true`. @default false */
    expanded?: boolean | undefined;
    /** A custom call to action component for the header */
    callToActionComponent?: JSX.Element | undefined;
    /** Specifies the display state which renders an icon. @default "default" */
    displayState?: BoxContainerDisplayState | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** The id used for testing the label and handle button */
    subComponentTestIds?: BoxContainerSubComponentTestIds | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The unique id of the component */
    id?: string | undefined;
    /** Specifies if clicking on any part of the header expands or closes the contents */
    clickableHeader?: boolean | undefined;
}
