import type React from "react";
import type { DropdownVariantType } from "../dropdown-list/types";
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
    variant?: DropdownVariantType | undefined;
    onClear?: (() => void) | undefined;
}
export declare const DropdownSearch: (props: Props & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
export {};
