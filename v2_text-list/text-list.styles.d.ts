import { V2_TextSizeType } from "../v2_text/types";
import { V2_OrderedListProps, V2_UnorderedListProps } from "./types";
interface OrderedListStyleProps extends V2_OrderedListProps {
    size: V2_TextSizeType;
}
interface UnorderedListStyleProps extends V2_UnorderedListProps {
    size: V2_TextSizeType;
}
/** @deprecated */
export declare const V2_StyledOrderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, keyof OrderedListStyleProps> & OrderedListStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, keyof OrderedListStyleProps> & OrderedListStyleProps, never>>> & string;
/** @deprecated */
export declare const V2_StyledUnorderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, keyof UnorderedListStyleProps> & UnorderedListStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, keyof UnorderedListStyleProps> & UnorderedListStyleProps, never>>> & string;
export {};
