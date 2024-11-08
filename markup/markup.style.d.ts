import { TypographySizeType } from "../theme/font/types";
interface ContainerStyleProps {
    $textSize?: TypographySizeType | undefined;
    $textColor?: string | ((props: unknown) => string) | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export {};
