import { FormLabelAddonProps } from "../form/types";

export type Mode = "default" | "mobile";

/**
 * Props for the Filter component - collapsible filter panel.
 *
 * Renders a panel of `Filter.Item` children with a header title, clear
 * button, and mobile-specific dismiss/done controls.
 *
 * @example
 * ```tsx
 * <Filter onClear={handleClear}>
 *     <Filter.Item title="Category">
 *         <CheckboxGroup ... />
 *     </Filter.Item>
 * </Filter>
 * ```
 * @keywords search filter, facet, refinement panel, sidebar filter, filter drawer
 */
export interface FilterProps {
    children: React.ReactNode | ((mode: Mode) => React.ReactNode);
    id?: string | undefined;
    /**
     * Disables the clear button when `true`.
     *
     * @default false
     */
    clearButtonDisabled?: boolean | undefined;
    /**
     * The title displayed in the filter panel header.
     *
     * @default "Filters"
     */
    headerTitle?: string | undefined;
    /**
     * The label on the mobile toggle button that opens the filter panel.
     *
     * @default "Filters"
     */
    toggleFilterButtonLabel?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** Called when dismiss button is pressed (mobile mode only). */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed (mobile mode only). */
    onDone?: (() => void) | undefined;
    /** Called when clear button is pressed. */
    onClear?: (() => void) | undefined;
}

/**
 * Props for the Filter.Item component - single collapsible filter section.
 *
 * Wraps a filter control (e.g. checkboxes, sliders) in a collapsible panel
 * with an optional header title and form label addon.
 */
export interface FilterItemProps {
    /** The content to render inside the filter item. Can be a React node or a render function receiving (mode, state) */
    children:
        | React.ReactNode
        | ((mode: Mode, state: { minimised: boolean }) => React.ReactNode);
    /** Specifies if header divider is visible in default mode */
    showDivider?: boolean | undefined;
    /** Specifies if divider is visible in mobile mode */
    showMobileDivider?: boolean | undefined;
    title?: string | undefined;
    addon?: FormLabelAddonProps | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    collapsible?: boolean | undefined;
    /** Specifies the initial expand state for the uncontrolled component */
    initialExpanded?: boolean | undefined;
    /** Specifies the expand state for the controlled component */
    expanded?: boolean | undefined;
    /** Called when the expand state changes */
    onExpandChange?: ((expanded: boolean) => void) | undefined;
    minimisable?: boolean | undefined;
    minimisedHeight?: number | undefined;
    style?: React.CSSProperties | undefined;
}

export interface FilterPageProps {
    /** The content to render inside the filter page */
    children: React.ReactNode;
    /** Called when dismiss button is pressed */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed */
    onDone?: (() => void) | undefined;
}

export interface FilterItemCheckboxProps<T>
    extends Omit<FilterItemProps, "children"> {
    options: T[];
    selectedOptions?: T[] | undefined;
    onSelect?: ((options: T[]) => void) | undefined;
    /** Function to derive display value from an item. If not set, checks `item.label`. */
    labelExtractor?: ((item: T) => React.ReactNode) | undefined;
    /** Function to derive value from an item. If not set, checks `item.value`. */
    valueExtractor?: ((item: T) => string) | undefined;
}
