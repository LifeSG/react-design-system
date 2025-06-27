import { TypographySizeType } from "../theme/font/types";
import { BulletType, CounterType } from "./types";
interface ListStyleProps {
    $bottomMargin: number | undefined;
    $size: TypographySizeType | undefined;
}
interface OrderedListStyleProps extends ListStyleProps {
    $counterType: CounterType | undefined;
    $counterSeparator: string | undefined;
}
interface UnorderedListStyleProps extends ListStyleProps {
    $bulletType: BulletType | undefined;
}
export declare const StyledOrderedList: import("styled-components").StyledComponent<"ol", import("styled-components").DefaultTheme, OrderedListStyleProps, never>;
export declare const StyledUnorderedList: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, UnorderedListStyleProps, never>;
export {};
