import { DropdownVariantType, LabelDisplayType } from "../dropdown-list/types";
interface DropdownLabelProps {
    bold?: boolean | undefined;
    displayType?: LabelDisplayType | undefined;
    label: string;
    maxLines?: number | undefined;
    searchTerm?: string | undefined;
    selected?: boolean | undefined;
    disabled?: boolean | undefined;
    sublabel?: string | undefined;
    truncationType?: "middle" | "end" | undefined;
    variant?: DropdownVariantType | undefined;
}
export declare const DropdownLabel: ({ bold, displayType, label, searchTerm, maxLines, selected, disabled, sublabel, truncationType, variant, }: DropdownLabelProps) => JSX.Element;
export {};
