import type { CSSProperties, ReactNode } from "react";
import type { ButtonStyleType } from "../button/types";
import type { FormLabelAddonProps } from "../form/types";
import type { Insets } from "../shared/types";
/**
 * Rendering context for the filter panel.
 *
 * `"default"` indicates the desktop sidebar; `"mobile"` indicates the modal overlay.
 */
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
 * Shared props for the sidebar and modal variants of the filter panel.
 */
export interface FilterBaseProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    /**
     * Number of active filter selections displayed as a badge on the header and
     * toggle button.
     */
    count?: number | undefined;
    /**
     * When `true`, the clear button is rendered in a disabled state.
     *
     * @default false
     */
    clearButtonDisabled?: boolean | undefined;
    /** Called when the clear button is pressed. */
    onClear?: (() => void) | undefined;
    /**
     * Content rendered inside the filter panel.
     *
     * Pass a render function to receive the current `Mode` and conditionally
     * render different content for desktop (`"default"`) and mobile (`"mobile"`).
     */
    children?: ReactNode | ((mode: Mode) => ReactNode);
    /**
     * @deprecated Use `customLabels` instead.
     */
    headerTitle?: string | undefined;
    /**
     * @deprecated Use `customLabels` instead.
     */
    toggleFilterButtonLabel?: string | undefined;
    /**
     * @deprecated Use `customLabels` instead.
     */
    doneButtonLabel?: string | undefined;
}
/**
 * Props for the desktop sidebar variant of the filter panel.
 */
export interface FilterSidebarProps extends FilterBaseProps {
    /** Overrides default labels used by the sidebar variant. */
    customLabels?: FilterSidebarCustomLabelProps | undefined;
}
/**
 * Props for the mobile modal variant of the filter panel.
 */
export interface FilterModalProps extends FilterBaseProps {
    /** Called when the dismiss (close) button is pressed in the modal overlay. */
    onDismiss?: (() => void) | undefined;
    /** Called when the done button is pressed in the modal overlay. */
    onDone?: (() => void) | undefined;
    /** Called when the modal overlay is opened by the toggle button. */
    onModalOpen?: () => void;
    /**
     * Visual style of the toggle button that opens the modal.
     *
     * @default "light"
     */
    toggleFilterButtonStyle?: ButtonStyleType | undefined;
    /** Overrides default labels used by the modal variant. */
    customLabels?: FilterModalCustomLabelProps | undefined;
    /**
     * Safe-area insets applied to the modal header and footer, useful for
     * notch or home-indicator offsets on mobile devices.
     */
    insets?: Insets | undefined;
}
/**
 * Props for the `Filter` component, combining both sidebar and modal variants.
 */
export interface FilterProps extends Omit<FilterSidebarProps, "customLabels">, Omit<FilterModalProps, "customLabels"> {
    /**
     * Overrides default labels for the active variant.
     *
     * Only the labels relevant to the current mode (sidebar or modal) are used.
     */
    customLabels?: FilterModalCustomLabelProps | FilterSidebarCustomLabelProps | undefined;
}
/**
 * Props for a single collapsible filter section within a filter panel.
 */
export interface FilterItemProps {
    /**
     * Content rendered inside the filter item.
     *
     * Pass a render function to receive the current `Mode` and minimised state,
     * enabling content to adapt between desktop and mobile contexts.
     */
    children: React.ReactNode | ((mode: Mode, state: {
        minimised: boolean;
    }) => React.ReactNode);
    /**
     * Whether a divider line is shown above the item in desktop mode.
     *
     * @default true
     */
    showDivider?: boolean | undefined;
    /**
     * Whether a divider line is shown above the item in mobile mode.
     *
     * @default true
     */
    showMobileDivider?: boolean | undefined;
    /** Label rendered in the item header. */
    title?: string | undefined;
    /** Optional popover addon displayed inline with the title. */
    addon?: FormLabelAddonProps | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Whether the item can be expanded or collapsed in desktop mode.
     * Items are always expanded in mobile mode regardless of this setting.
     *
     * @default true
     */
    collapsible?: boolean | undefined;
    /**
     * Initial expanded state for the uncontrolled component.
     * Has no effect when `expanded` is provided.
     *
     * @default false
     */
    initialExpanded?: boolean | undefined;
    /**
     * Controls the expanded state. When provided, the component is controlled
     * and `onExpandChange` must be used to update the value.
     */
    expanded?: boolean | undefined;
    /**
     * Called when the user toggles the expand/collapse state.
     */
    onExpandChange?: ((expanded: boolean) => void) | undefined;
    /**
     * Whether the item content can be minimised to show a truncated height with
     * a "View more" button.
     *
     * @default false
     */
    minimisable?: boolean | undefined;
    /**
     * Height in pixels to clip the content when minimised.
     * Defaults to 50% of content height, capped at 216 px.
     */
    minimisedHeight?: number | undefined;
    style?: React.CSSProperties | undefined;
}
/**
 * Props for a full-screen sub-page overlay within the mobile filter modal.
 *
 * `Filter.Page` provides a back-navigation header and a done button,
 * intended for drill-down selection flows inside a filter item.
 */
export interface FilterPageProps {
    "data-testid"?: string | undefined;
    children: React.ReactNode;
    /** Called when the back (dismiss) button is pressed. */
    onDismiss?: (() => void) | undefined;
    /** Called when the done button is pressed. */
    onDone?: (() => void) | undefined;
}
/**
 * Default shape for a checkbox option in `Filter.Checkbox`.
 *
 * Nest `options` to create hierarchical groups with parent-level
 * select/deselect all behavior.
 */
export interface FilterItemCheckboxOptionProps {
    value: any;
    label: string;
    /** Nested child options. Providing children makes this item a parent node. */
    options?: FilterItemCheckboxOptionProps[] | undefined;
}
/**
 * Props for `Filter.Checkbox`, a filter item that renders a list of selectable
 * checkboxes (desktop) or toggle chips (mobile).
 *
 * Supply a generic type `T` to use a custom option shape together with
 * `labelExtractor` and `valueExtractor`.
 */
export interface FilterItemCheckboxProps<T = FilterItemCheckboxOptionProps> extends Omit<FilterItemProps, "children"> {
    /** The full list of selectable options. */
    options: T[];
    /**
     * The currently selected options. When provided, the component syncs its
     * internal selection state to this value.
     */
    selectedOptions?: T[] | undefined;
    /**
     * Called when the selection changes.
     *
     * @param options The updated array of selected options.
     */
    onSelect?: ((options: T[]) => void) | undefined;
    /**
     * Derives the display label from an option item.
     * Falls back to `item.label` when not provided.
     */
    labelExtractor?: ((item: T) => React.ReactNode) | undefined;
    /**
     * Derives the unique value key from an option item.
     * Falls back to `item.value` when not provided.
     */
    valueExtractor?: ((item: T) => string) | undefined;
    /**
     * When `true`, toggle chips in mobile mode grow to fit their content width
     * instead of stretching to a fixed minimum width.
     */
    useToggleContentWidth?: boolean | undefined;
    /**
     * When `true`, renders checkboxes instead of toggle chips in mobile mode.
     * Has no effect for nested option trees, which always use checkboxes.
     *
     * @default false
     */
    showAsCheckboxInMobile?: boolean | undefined;
    /**
     * When `true`, shows a "View more / View less" button when there are more
     * options than the minimised threshold.
     *
     * @default true
     */
    minimisableOptions?: boolean | undefined;
}
export {};
