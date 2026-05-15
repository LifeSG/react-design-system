import { BadgeProps } from "./types";
interface StyledBadgeProps {
    $variant: BadgeProps["variant"];
    $color: BadgeProps["color"];
}
interface BadgeContainerProps {
    $isOverlay?: boolean;
}
interface BadgeWrapperProps extends BadgeContainerProps {
    $offset?: [string, string];
}
export declare const BadgeOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isOverlay"> & BadgeContainerProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isOverlay"> & BadgeContainerProps, never>>> & string;
export declare const BadgeWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof BadgeWrapperProps> & BadgeWrapperProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof BadgeWrapperProps> & BadgeWrapperProps, never>>> & string;
export declare const StyledBadge: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyledBadgeProps> & StyledBadgeProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyledBadgeProps> & StyledBadgeProps, never>>> & string;
export {};
