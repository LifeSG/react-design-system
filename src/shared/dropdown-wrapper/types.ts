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

export type DropdownAlignmentType = "left" | "right";

export interface DropdownWrapperValueLabelDataAttrs {
    "data-variant"?: DropdownVariantType;
    "data-truncate"?: TruncateType;
}
