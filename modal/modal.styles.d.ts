import { ModalAnimationDirection } from "./types";
interface Props {
    show: boolean;
    animationFrom?: ModalAnimationDirection;
    verticalHeight?: number;
    offsetTop?: number;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export {};
