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
export declare const StyledOrderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, OrderedListStyleProps>> & string;
export declare const StyledUnorderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, UnorderedListStyleProps>> & string;
export {};
