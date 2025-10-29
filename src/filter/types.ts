import { CSSProperties, ReactNode } from "react";
import { ButtonStyleType } from "../button/types";
import { FormLabelAddonProps } from "../form/types";
import { Insets } from "../shared/types";

export type Mode = "default" | "mobile";

interface FilterSidebarCustomLabel {
    headerTitle?: string | undefined;
    clearButtonLabel?: string | undefined;
}
interface FilterModalCustomLabel {
    headerTitle?: string | undefined;
    toggleFilterButtonLabel?: string | undefined;
    doneButtonLabel?: string | undefined;
    clearButtonLabel?: string | undefined;
}

export interface FilterBaseProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    clearButtonDisabled?: boolean | undefined;
    insets?: Insets | undefined;
    /** Called when clear button is pressed */
    onClear?: (() => void) | undefined;
    children?: ReactNode | ((mode: "mobile" | "default") => ReactNode);
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

export interface FilterSidebarProps extends FilterBaseProps {
    customLabels?: FilterSidebarCustomLabel | undefined;
}

export interface FilterModalProps extends FilterBaseProps {
    /** Called when dismiss button is pressed (mobile mode only) */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed (mobile mode only) */
    onDone?: (() => void) | undefined;
    onModalOpen?: () => void;
    toggleFilterButtonStyle?: ButtonStyleType | undefined;
    customLabels?: FilterModalCustomLabel | undefined;
}

export interface FilterProps extends FilterBaseProps {
    /** Called when dismiss button is pressed (mobile mode only) */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed (mobile mode only) */
    onDone?: (() => void) | undefined;
    customLabels?:
        | FilterModalCustomLabel
        | FilterSidebarCustomLabel
        | undefined;
}

export interface FilterItemProps {
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
    children: React.ReactNode;
    /** Called when dismiss button is pressed */
    onDismiss?: (() => void) | undefined;
    /** Called when done button is pressed */
    onDone?: (() => void) | undefined;
}

export interface FilterItemCheckboxOptionProps {
    value: any;
    label: string;
    options?: FilterItemCheckboxOptionProps[] | undefined;
}

export interface FilterItemCheckboxProps<T = FilterItemCheckboxOptionProps>
    extends Omit<FilterItemProps, "children"> {
    options: T[];
    selectedOptions?: T[] | undefined;
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
