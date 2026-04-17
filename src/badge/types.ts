export type BadgeVariant =
    | "number"
    | "number-with-border"
    | "dot"
    | "dot-with-border"
    | "square-number";

export type BadgeColor = "default" | "important";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    badgeOffset?: [string, string] | undefined;
    children?: JSX.Element | undefined;
    color?: BadgeColor | undefined;
    count?: number | undefined;
    "data-testid"?: string | undefined;
    variant?: BadgeVariant | undefined;
}
