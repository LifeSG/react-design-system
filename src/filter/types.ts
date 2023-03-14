export type Mode = "default" | "mobile";

export interface FilterProps {
    clearButtonDisabled?: boolean | undefined;
    toggleFilterButtonLabel?: string | undefined;
    headerTitle?: string | undefined;
    onDismiss?: (() => void) | undefined;
    onDone?: (() => void) | undefined;
    onClear?: (() => void) | undefined;
    children?: React.ReactNode | ((mode: Mode) => React.ReactNode) | undefined;
}

export interface FilterItemProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    collapsible?: boolean | undefined;
    showDivider?: boolean | undefined;
    showMobileDivider?: boolean | undefined;
    title?: string | undefined;
    children?: React.ReactNode | ((mode: Mode) => React.ReactNode) | undefined;
}

export interface FilterPageProps {
    onDismiss?: (() => void) | undefined;
    onDone?: (() => void) | undefined;
    children?: React.ReactNode | undefined;
}
