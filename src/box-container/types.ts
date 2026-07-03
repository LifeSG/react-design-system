/** Visual status applied to the box container header, reflected via an icon and accessible label. */
export type BoxContainerDisplayState = "default" | "error" | "warning";

/** Overrides for `data-testid` attributes on internal sub-elements. */
export interface BoxContainerSubComponentTestIds {
    title?: string | undefined;
    handle?: string | undefined;
    displayStateIcon?: string | undefined;
}

/** Props for the `BoxContainer` component. */
export interface BoxContainerProps {
    children: JSX.Element | JSX.Element[];
    title: string | JSX.Element;
    /**
     * When `false`, the container is always expanded and the collapse handle is
     * hidden.
     *
     * @default true
     */
    collapsible?: boolean | undefined;
    /**
     * Initial expanded state when `collapsible` is `true`.
     *
     * @default false
     */
    expanded?: boolean | undefined;
    /** Optional element rendered in the header alongside the title, e.g. a link or button. */
    callToActionComponent?: JSX.Element | undefined;
    /**
     * Renders an inline alert icon next to the title and announces the state to
     * screen readers. Has no effect when set to `"default"`.
     */
    displayState?: BoxContainerDisplayState | undefined;
    className?: string | undefined;
    subComponentTestIds?: BoxContainerSubComponentTestIds | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /**
     * When `true` (and `collapsible` is also `true`), the entire header row
     * becomes a click target for toggling expand/collapse, not just the chevron
     * button.
     */
    clickableHeader?: boolean | undefined;
}
