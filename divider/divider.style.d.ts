import { ThemeStyleProps } from "../theme/types";
import { DividerLineStyleType } from "./types";
interface StyleProps {
    $thickness: number;
    $color?: string | ((props: ThemeStyleProps) => string);
    $lineStyle?: DividerLineStyleType;
}
export declare const Line: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, StyleProps>> & string;
export {};
