import { ModalAnimationDirection } from "./types";
interface Props {
    show: boolean;
    animationFrom?: ModalAnimationDirection;
    verticalHeight?: number;
    offsetTop?: number;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export {};
