import type React from "react";
import type { DropdownVariantType } from "./types";
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
    onClear?: () => void | undefined;
    variant?: DropdownVariantType | undefined;
}
export declare const DropdownSearch: (props: Props & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
export {};
