import { DropdownVariantType } from "../dropdown-list/types";

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
