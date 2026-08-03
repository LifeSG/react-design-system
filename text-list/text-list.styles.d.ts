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
    $hasCustomIcon: boolean | undefined;
}
export declare const StyledOrderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, keyof OrderedListStyleProps> & OrderedListStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, keyof OrderedListStyleProps> & OrderedListStyleProps, never>>> & string;
export declare const StyledUnorderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, keyof UnorderedListStyleProps> & UnorderedListStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, keyof UnorderedListStyleProps> & UnorderedListStyleProps, never>>> & string;
export {};
