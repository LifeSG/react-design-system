/// <reference types="react" />
import { DropdownVariantType, LabelDisplayType } from "../dropdown-list/types";
interface DropdownLabelProps {
    displayType?: LabelDisplayType | undefined;
    label: string;
    maxLines?: number | undefined;
    selected?: boolean | undefined;
    sublabel: string;
    truncationType?: "middle" | "end" | undefined;
    variant?: DropdownVariantType | undefined;
}
export declare const DropdownLabel: ({ displayType, label, maxLines, selected, sublabel, truncationType, variant, }: DropdownLabelProps) => JSX.Element;
export {};
