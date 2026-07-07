import type { DropdownVariantType, TruncateType } from "../dropdown-list/types";

export interface DropdownSelectorProps {
    children: React.ReactNode;
    show: boolean;
    onBlur: () => void;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    testId?: string | undefined;
    readOnly?: boolean | undefined;
    className?: string | undefined;
    variant?: DropdownVariantType | undefined;
}

export interface ValueLabelProps {
    variant?: DropdownVariantType | undefined;
    truncateType?: TruncateType | undefined;
    children: React.ReactNode;
}

export interface LabelContainerProps {
    disabled?: boolean | undefined;
    children: React.ReactNode;
}

export type DropdownAlignmentType = "left" | "right";
