import { ThemeStyleProps } from "../../theme";
import { TimeTableCellType } from "../types";
interface BlockStyleProps {
    $width: number;
    $status: TimeTableCellType;
    $mainColor: string;
    $altColor: string;
    $isClickable?: boolean;
    $customMainColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $customAltColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $customHoverColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $customAltHoverColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $styleType?: "default" | "solid" | "stripes" | undefined;
}
interface BlockContainerProps {
    $isOnTheHour: boolean;
}
export declare const BlockContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isOnTheHour"> & BlockContainerProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isOnTheHour"> & BlockContainerProps, never>>> & string;
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Gap: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Block: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof BlockStyleProps> & BlockStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof BlockStyleProps> & BlockStyleProps, never>>> & string;
export declare const BlockTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never> & Partial<Pick<import("../..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never>>> & string;
export declare const BlockDescription: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never> & Partial<Pick<import("../..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never>>> & string;
export {};
