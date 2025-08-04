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
export declare const BadgeOverlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BadgeContainerProps, never>;
export declare const BadgeWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BadgeWrapperProps, never>;
export declare const StyledBadge: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledBadgeProps, never>;
export {};
