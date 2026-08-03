export interface StyledDivStyleProps {
    $desktopStart?: number | undefined;
    $desktopSpan?: number | undefined;
    $tabletStart?: number | undefined;
    $tabletSpan?: number | undefined;
    $mobileStart?: number | undefined;
    $mobileSpan?: number | undefined;
}
export declare const StyledDiv: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyledDivStyleProps> & StyledDivStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyledDivStyleProps> & StyledDivStyleProps, never>>> & string;
