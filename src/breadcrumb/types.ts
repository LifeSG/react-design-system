export type FadePosition = "left" | "right" | "both";

export interface FadeColorSet {
    left?: string[] | undefined;
    right?: string[] | undefined;
}

export interface BreadcrumbProps {
    links: React.AnchorHTMLAttributes<HTMLAnchorElement>[];
    fadeColor?: string[] | FadeColorSet | undefined;
    fadePosition?: FadePosition | undefined;
    itemStyle?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
