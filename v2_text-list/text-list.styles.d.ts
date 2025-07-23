import { V2_TextSizeType } from "../v2_text/types";
import { V2_OrderedListProps, V2_UnorderedListProps } from "./types";
interface OrderedListStyleProps extends V2_OrderedListProps {
    size: V2_TextSizeType;
}
interface UnorderedListStyleProps extends V2_UnorderedListProps {
    size: V2_TextSizeType;
}
/** @deprecated */
export declare const V2_StyledOrderedList: import("styled-components").StyledComponent<"ol", import("styled-components").DefaultTheme, OrderedListStyleProps, never>;
/** @deprecated */
export declare const V2_StyledUnorderedList: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, UnorderedListStyleProps, never>;
export {};
