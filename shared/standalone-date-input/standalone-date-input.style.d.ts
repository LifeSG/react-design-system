interface PlaceholderStyleProps {
    $hide?: boolean;
    $disabled?: boolean;
}
interface DividerStyleProps {
    $inactive?: boolean;
}
interface InputContainerStyleProps {
    $hover?: boolean;
}
export declare const InputSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const InputContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, InputContainerStyleProps>> & string;
export declare const DayInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$variant"> & import("../input-wrapper/input-wrapper").InputStyleProps, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}, never>, never>> & string;
export declare const MonthInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$variant"> & import("../input-wrapper/input-wrapper").InputStyleProps, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}, never>, never>> & string;
export declare const YearInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$variant"> & import("../input-wrapper/input-wrapper").InputStyleProps, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}, never>, never>> & string;
export declare const Divider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, DividerStyleProps>> & string;
export declare const Placeholder: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PlaceholderStyleProps>> & string;
export {};
