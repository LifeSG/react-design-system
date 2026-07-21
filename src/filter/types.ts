import type { CSSProperties, ReactNode } from "react";

import type { ButtonStyleType } from "../button/types";
import type { FormLabelAddonProps } from "../form/types";
import type { Insets } from "../shared/types";

// @storybookSection Filter, Filter.Item
/**
 * Rendering context for the filter panel.
 *
 * `"default"` indicates the desktop sidebar; `"mobile"` indicates the modal overlay.
 */
export type Mode = "default" | "mobile";

// @storybookSection Filter, Filter.Sidebar
interface FilterSidebarCustomLabelProps {
    /**
     * The title of the filter header
     *
     * @default "Filters"
     */
    headerTitle?: string | undefined;
    /**
     * The display label of the `Clear` button
     *
     * @default "Clear"
     */
    clearButtonLabel?: string | undefined;
}
// @storybookSection Filter, Filter.Modal
interface FilterModalCustomLabelProps {
    /**
     * The title of the filter header
     *
     * @default "Filters"
     */
    headerTitle?: string | undefined;
    /**
     * The display label of the filter toggle button (in mobile)
     *
     * @default "Filters"
     */
    toggleFilterButtonLabel?: string | undefined;
    /**
     * The display label of the `Done` button (in mobile)
     *
     * @default "Done"
     */
    doneButtonLabel?: string | undefined;
    /**
     * The display label of the `Clear` button
     *
     * @default "Clear"
     */
    clearButtonLabel?: string | undefined;
}

// @storybookSkipProps
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

// @storybookSection Filter.Sidebar
/**
 * Props for the `Filter.Sidebar` sub-component.
 */
export interface FilterSidebarProps extends FilterBaseProps {
    /** Overrides default labels used by the sidebar variant. */
    customLabels?: FilterSidebarCustomLabelProps | undefined;
}

// @storybookSection Filter.Modal
/**
 * Props for the `Filter.Modal` sub-component.
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

// @storybookSection Filter
/**
 * Props for the `Filter` component.
 */
export interface FilterProps
    extends Omit<FilterSidebarProps, "customLabels">,
        Omit<FilterModalProps, "customLabels"> {
    /**
     * Overrides default labels for the active variant.
     *
     * Only the labels relevant to the current mode (sidebar or modal) are used.
     */
    customLabels?:
        | FilterModalCustomLabelProps
        | FilterSidebarCustomLabelProps
        | undefined;
}

// @storybookSection Filter.Item
/**
 * Props for the `Filter.Item` sub-component.
 */
export interface FilterItemProps {
    /**
     * Content rendered inside the filter item.
     *
     * Pass a render function to receive the current `Mode` and minimised state,
     * enabling content to adapt between desktop and mobile contexts.
     */
    children:
        | React.ReactNode
        | ((mode: Mode, state: { minimised: boolean }) => React.ReactNode);
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

// @storybookSection Filter.Page
/**
 * Props for the `Filter.Page` sub-component.
 */
export interface FilterPageProps {
    "data-testid"?: string | undefined;
    children: React.ReactNode;
    /** Called when the back (dismiss) button is pressed. */
    onDismiss?: (() => void) | undefined;
    /** Called when the done button is pressed. */
    onDone?: (() => void) | undefined;
}
