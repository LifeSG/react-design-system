import { TypographySizeType } from "../theme/font/types";
import { ThemeStyleProps } from "../theme/types";
interface ContainerStyleProps {
    $textSize?: TypographySizeType | undefined;
    $textColor?: string | ((props: ThemeStyleProps) => string) | undefined;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ContainerStyleProps> & ContainerStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ContainerStyleProps> & ContainerStyleProps, never>>> & string;
export {};
