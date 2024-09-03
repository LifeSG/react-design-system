import { HtmlContentStyleOptions } from "../shared/html-content/html-content";
interface ContainerStyleProps {
    $textSize?: HtmlContentStyleOptions["textSize"] | undefined;
    $textColor?: string | ((props: unknown) => string) | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export {};
