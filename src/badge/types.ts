export type BadgeVariant =
    | "number"
    | "number-with-border"
    | "dot"
    | "dot-with-border";

export type BadgeColor = "default" | "important";

export type BadgeProps = {
    count?: number;
    variant?: BadgeVariant;
    color?: BadgeColor;
    isOnAvatar?: boolean;
};
