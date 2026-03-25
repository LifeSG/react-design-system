import type { V3_TypographySizeType } from "../v3_theme/font/types";
import type { V3_ThemeStyleProps } from "../v3_theme/types";
interface ContainerStyleProps {
    $textSize?: V3_TypographySizeType | undefined;
    $textColor?: string | ((props: V3_ThemeStyleProps) => string) | undefined;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContainerStyleProps>> & string;
export {};
