import React from "react";
import { DropdownVariantType } from "../dropdown-list/types";
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
    variant?: DropdownVariantType | undefined;
    onClear?: (() => void) | undefined;
}
export declare const DropdownSearch: (props: Props & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
export {};
