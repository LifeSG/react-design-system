import { DropdownVariantType, TruncateType } from "../dropdown-list/types";
export interface DropdownWrapperStyleProps {
    $disabled?: boolean;
    $readOnly?: boolean;
    $error?: boolean;
    $expanded?: boolean;
}
export interface ValueLabelStyleProps {
    $truncateType?: TruncateType;
    $variant?: DropdownVariantType | undefined;
}
export interface SelectorStyleProps {
    $variant?: DropdownVariantType | undefined;
}
export interface LabelContainerStyleProps {
    $disabled?: boolean | undefined;
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SelectorStyleProps>> & string;
export declare const LabelContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LabelContainerStyleProps>> & string;
export declare const ValueLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ValueLabelStyleProps>> & string;
export declare const PlaceholderLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ValueLabelStyleProps> & ValueLabelStyleProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
