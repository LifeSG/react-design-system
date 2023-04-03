/// <reference types="react" />
export declare type Mode = "default" | "mobile";
export interface FilterProps {
    children: React.ReactNode | ((mode: Mode) => React.ReactNode);
    clearButtonDisabled?: boolean | undefined;
    headerTitle?: string | undefined;
    toggleFilterButtonLabel?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /** Called when dismiss button is pressed (mobile mode only) */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed (mobile mode only) */
    onDone?: (() => void) | undefined;
    /** Called when clear button is pressed */
    onClear?: (() => void) | undefined;
}
export interface FilterItemProps {
    children: React.ReactNode | ((mode: Mode, state: {
        minimised: boolean;
    }) => React.ReactNode);
    /** Specifies if header divider is visible in default mode */
    showDivider?: boolean | undefined;
    /** Specifies if divider is visible in mobile mode */
    showMobileDivider?: boolean | undefined;
    title?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    collapsible?: boolean | undefined;
    minimisable?: boolean | undefined;
    minimisedHeight?: number | undefined;
}
export interface FilterPageProps {
    children: React.ReactNode;
    /** Called when dismiss button is pressed */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed */
    onDone?: (() => void) | undefined;
}
export interface FilterItemCheckboxProps<T> extends Omit<FilterItemProps, "children"> {
    options: T[];
    selectedOptions?: T[] | undefined;
    onSelect?: ((options: T[]) => void) | undefined;
    /** Function to derive display value from an item. If not set, checks `item.label`. */
    labelExtractor?: ((item: T) => string) | undefined;
    /** Function to derive value from an item. If not set, checks `item.value`. */
    valueExtractor?: ((item: T) => string) | undefined;
}
