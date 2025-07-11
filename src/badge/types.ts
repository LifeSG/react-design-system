export type BadgeVariant =
    | "number"
    | "number-with-border"
    | "dot"
    | "dot-with-border";

export type BadgeColor = "default" | "important";

export interface BadgeProps {
    count?: number | undefined;
    variant?: BadgeVariant | undefined;
    color?: BadgeColor | undefined;
    isOverlay?: boolean | undefined;
}
