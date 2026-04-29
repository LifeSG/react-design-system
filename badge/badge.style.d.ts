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
export declare const BadgeOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BadgeContainerProps>> & string;
export declare const BadgeWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BadgeWrapperProps>> & string;
export declare const StyledBadge: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledBadgeProps>> & string;
export {};
