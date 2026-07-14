import { InputGroupAddonPosition } from "./types";
interface StyleProps {
    $readOnly?: boolean;
    $expanded?: boolean;
    $position?: InputGroupAddonPosition;
    $noBorder?: boolean;
}
interface DividerStyleProps {
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}
export declare const FieldWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../shared/input-wrapper").InputWrapperStyleProps> & import("../shared/input-wrapper").InputWrapperStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../shared/input-wrapper").InputWrapperStyleProps> & import("../shared/input-wrapper").InputWrapperStyleProps, never>> & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../shared/input-wrapper").InputWrapperStyleProps> & import("../shared/input-wrapper").InputWrapperStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../shared/input-wrapper").InputWrapperStyleProps> & import("../shared/input-wrapper").InputWrapperStyleProps, never>> & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, keyof StyleProps> & StyleProps, never>>> & string;
export declare const StyledExpandableElement: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("../shared/dropdown-list").ExpandableElementProps & import("react").RefAttributes<HTMLButtonElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("../shared/dropdown-list").ExpandableElementProps & import("react").RefAttributes<HTMLButtonElement>, keyof StyleProps> & StyleProps, never>>> & string & Omit<(props: import("../shared/dropdown-list").ExpandableElementProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const FieldSelector: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const FieldInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("..").InputProps & import("react").RefAttributes<HTMLInputElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("..").InputProps & import("react").RefAttributes<HTMLInputElement>, keyof StyleProps> & StyleProps, never>>> & string & Omit<(props: import("..").InputProps & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const SelectorReadOnly: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Divider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof DividerStyleProps> & DividerStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof DividerStyleProps> & DividerStyleProps, never>>> & string;
export {};
