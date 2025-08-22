import { DropdownVariantType } from "./types";
interface StyleProps {
    $expanded?: boolean;
    $variant?: DropdownVariantType;
}
export declare const Selector: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$variant"> & import("../input-wrapper/input-wrapper").InputStyleProps, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, StyleProps>> & string;
export declare const IconContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyleProps>> & string;
export {};
