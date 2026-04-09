import { DropdownVariantType } from "../dropdown-list-v2/types";

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
