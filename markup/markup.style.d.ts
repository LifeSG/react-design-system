import { TypographySizeType } from "../theme/font/types";
import { ThemeStyleProps } from "../theme/types";
interface ContainerStyleProps {
    $textSize?: TypographySizeType | undefined;
    $textColor?: string | ((props: ThemeStyleProps) => string) | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export {};
