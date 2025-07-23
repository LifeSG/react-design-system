import { ButtonStyleType } from "../button/types";
import { FormLabelAddonProps } from "../form/types";
export type Mode = "default" | "mobile";
export interface FilterProps {
    children: React.ReactNode | ((mode: Mode) => React.ReactNode);
    clearButtonDisabled?: boolean | undefined;
    headerTitle?: string | undefined;
    toggleFilterButtonLabel?: string | undefined;
    toggleFilterButtonStyle?: ButtonStyleType | undefined;
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
    labelExtractor?: ((item: T) => React.ReactNode) | undefined;
    /** Function to derive value from an item. If not set, checks `item.value`. */
    valueExtractor?: ((item: T) => string) | undefined;
    /** Changes min-width of toggle in mobile view to fit content */
    useToggleContentWidth?: boolean | undefined;
}
