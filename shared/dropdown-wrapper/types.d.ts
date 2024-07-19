/// <reference types="react" />
import { DropdownVariantType } from "../dropdown-list/types";
export interface DropdownSelectorProps {
    children: JSX.Element[];
    show: boolean;
    onBlur: () => void;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    testId?: string | undefined;
    readOnly?: boolean | undefined;
    className?: string | undefined;
    variant?: DropdownVariantType | undefined;
}
