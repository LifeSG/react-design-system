import { ModalAnimationDirection } from "../modal-v2/types";
interface Props {
    $show: boolean;
    $ready?: boolean;
    $animationFrom?: ModalAnimationDirection;
    $verticalHeight?: number;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof Props> & Props, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof Props> & Props, never>>> & string;
export {};
