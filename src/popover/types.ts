/** @deprecated Use `PopoverV2` */
export interface PopoverProps {
    /** The content displayed inside the popover bubble. */
    children: string | JSX.Element;
    /**
     * When `true`, shows the popover.
     *
     * @default false
     */
    visible?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
    /** Called when the user dismisses the popover modal on mobile viewports. */
    onMobileClose?: (() => void) | undefined;
}

/** @deprecated Use `PopoverV2` */
export interface PopoverHOCProps {
    /** Called when the popover becomes visible. */
    onPopoverAppear?: (() => void) | undefined;
    /** Called when the popover is dismissed. */
    onPopoverDismiss?: (() => void) | undefined;
}

/** @deprecated Use `PopoverV2` */
export interface PopoverHOCOptionsProps {
    /** The content displayed inside the popover bubble. */
    content: string | JSX.Element;
    /**
     * The interaction type that triggers the popover to appear.
     *
     * @default "click"
     */
    trigger?: "click" | "hover" | undefined;
    id?: string | undefined;
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
}
