import { DropdownVariantType } from "./types";
import { InputStyleProps } from "../input-wrapper/input-wrapper";
export interface StyleProps {
    $variant: DropdownVariantType | undefined;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$variant"> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$variant"> & StyleProps, never>>> & string;
export declare const SearchBox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "$variant"> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "$variant"> & StyleProps, never>>> & string;
export declare const SearchInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$variant"> & InputStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$variant"> & InputStyleProps, never>> & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}, "$variant"> & InputStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$variant"> & InputStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$variant"> & InputStyleProps, never>> & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}, "$variant"> & InputStyleProps, never>>> & string;
export declare const SearchIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never> & Partial<Pick<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const ClearButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, never> & Partial<Pick<import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, never>>> & string & Omit<(props: import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
