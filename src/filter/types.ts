import { CSSProperties, ReactNode } from "react";
import { ButtonStyleType } from "../button/types";
import { FormLabelAddonProps } from "../form/types";
import { Insets } from "../shared/types";

export type Mode = "default" | "mobile";

interface FilterSidebarCustomLabelProps {
    headerTitle?: string | undefined;
    clearButtonLabel?: string | undefined;
}
interface FilterModalCustomLabelProps {
    headerTitle?: string | undefined;
    toggleFilterButtonLabel?: string | undefined;
    doneButtonLabel?: string | undefined;
    clearButtonLabel?: string | undefined;
}

/**
 * Base props shared by all Filter variants. Displays widgets under collapsible panels to filter data results.
 *
 * @keywords filter, sidebar, modal, collapsible, search
 */
export interface FilterBaseProps {
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Inline styles for the component. */
    style?: CSSProperties | undefined;
    /** Specifies if the feature to expand/collapse all child items is enabled. @default false */
    clearButtonDisabled?: boolean | undefined;
    /** Called when clear button is pressed */
    onClear?: (() => void) | undefined;
    /** The items in the Filter. */
    children?: ReactNode | ((mode: Mode) => ReactNode);
    /**
     * @deprecated
     * use customLabels instead
     */
    headerTitle?: string | undefined;
    /**
     * @deprecated
     * use customLabels instead
     */
    toggleFilterButtonLabel?: string | undefined;
    /**
     * @deprecated
     * use customLabels instead
     */
    doneButtonLabel?: string | undefined;
}

/**
 * Props for the Filter.Sidebar variant, rendered as an accordion panel on desktop.
 *
 * @keywords filter, sidebar, accordion, desktop
 */
export interface FilterSidebarProps extends FilterBaseProps {
    /** Specifies custom labels for the sidebar. */
    customLabels?: FilterSidebarCustomLabelProps | undefined;
}

/**
 * Props for the Filter.Modal variant, rendered as a fullscreen modal on mobile.
 *
 * @keywords filter, modal, mobile, fullscreen
 */
export interface FilterModalProps extends FilterBaseProps {
    /** Called when dismiss button is pressed (mobile mode only) */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed (mobile mode only) */
    onDone?: (() => void) | undefined;
    /** Called when filter modal is opened (mobile only). */
    onModalOpen?: () => void;
    /** The style type of the filter toggle button (in mobile). @default "light" */
    toggleFilterButtonStyle?: ButtonStyleType | undefined;
    /** Specifies custom labels for the modal. */
    customLabels?: FilterModalCustomLabelProps | undefined;
    /** The distance from the edge of the viewport, defining the safe area not covered by status bars, notches, or other navigation elements. The header and footer in mobile mode will be offset accordingly. */
    insets?: Insets | undefined;
}

/**
 * Props for the default Filter component that automatically adapts between sidebar and modal based on screen size.
 *
 * @keywords filter, responsive, sidebar, modal, adaptive
 */
export interface FilterProps
    extends Omit<FilterSidebarProps, "customLabels">,
        Omit<FilterModalProps, "customLabels"> {
    /** Specifies custom labels. */
    customLabels?:
        | FilterModalCustomLabelProps
        | FilterSidebarCustomLabelProps
        | undefined;
}

/**
 * Props for an individual filter item rendered within a Filter container.
 *
 * @keywords filter-item, collapsible, accordion, filter
 */
export interface FilterItemProps {
    /** The contents of the filter item. */
    children:
        | React.ReactNode
        | ((mode: Mode, state: { minimised: boolean }) => React.ReactNode);
    /** Specifies if header divider is visible in default mode */
    showDivider?: boolean | undefined;
    /** Specifies if divider is visible in mobile mode */
    showMobileDivider?: boolean | undefined;
    /** The title of the filter item header. */
    title?: string | undefined;
    /** The addon element for the filter item label. */
    addon?: FormLabelAddonProps | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Specifies if the filter item is collapsible. */
    collapsible?: boolean | undefined;
    /** Specifies the initial expand state for the uncontrolled component */
    initialExpanded?: boolean | undefined;
    /** Specifies the expand state for the controlled component */
    expanded?: boolean | undefined;
    /** Called when the expand state changes */
    onExpandChange?: ((expanded: boolean) => void) | undefined;
    /** Specifies if the filter item can be minimised. */
    minimisable?: boolean | undefined;
    /** The height of the filter item when minimised, in pixels. */
    minimisedHeight?: number | undefined;
    /** Inline styles for the component. */
    style?: React.CSSProperties | undefined;
}

/**
 * Props for the full-page filter layout used in mobile view.
 *
 * @keywords filter-page, mobile, fullscreen, overlay
 */
export interface FilterPageProps {
    /** The contents of the filter page. */
    children: React.ReactNode;
    /** Called when dismiss button is pressed */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed */
    onDone?: (() => void) | undefined;
}

/**
 * Represents a single checkbox option in a FilterItemCheckbox.
 *
 * @keywords filter-checkbox, option, checkbox, selection
 */
export interface FilterItemCheckboxOptionProps {
    value: any;
    label: string;
    options?: FilterItemCheckboxOptionProps[] | undefined;
}

/**
 * Props for a filter item that renders its options as checkboxes.
 *
 * @keywords filter-checkbox, checkbox, multi-select, filter
 */
export interface FilterItemCheckboxProps<T = FilterItemCheckboxOptionProps>
    extends Omit<FilterItemProps, "children"> {
    /** The list of available checkbox options. */
    options: T[];
    /** The currently selected options. */
    selectedOptions?: T[] | undefined;
    /** Called when the selection changes. Returns the updated array of selected options. */
    onSelect?: ((options: T[]) => void) | undefined;
    /** Function to derive display value from an item. If not set, checks `item.label`. */
    labelExtractor?: ((item: T) => React.ReactNode) | undefined;
    /** Function to derive value from an item. If not set, checks `item.value`. */
    valueExtractor?: ((item: T) => string) | undefined;
    /** Changes min-width of toggle in mobile view to fit content */
    useToggleContentWidth?: boolean | undefined;
    /** Display checkbox list for mobile view */
    showAsCheckboxInMobile?: boolean | undefined;
    /** Whether to allow minimising (show "View more" button) */
    minimisableOptions?: boolean | undefined;
}
