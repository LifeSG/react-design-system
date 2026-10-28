import { ThemeStyleProps } from "../theme/types";
import { DividerLineStyleType } from "./types";
interface StyleProps {
    $thickness: number;
    $color?: string | ((props: ThemeStyleProps) => string);
    $lineStyle?: DividerLineStyleType;
}
export declare const Line: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, keyof StyleProps> & StyleProps, never>>> & string;
export {};
