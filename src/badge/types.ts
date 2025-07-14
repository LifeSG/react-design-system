export type BadgeVariant =
    | "number"
    | "number-with-border"
    | "dot"
    | "dot-with-border";

export type BadgeColor = "default" | "important";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    count?: number | undefined;
    variant?: BadgeVariant | undefined;
    color?: BadgeColor | undefined;
    isOverlay?: boolean | undefined;
    "data-testid"?: string | undefined;
}
