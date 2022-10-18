/// <reference types="react" />
export declare type FadePosition = "left" | "right" | "both";
export interface BreadcrumbProps {
    links: React.AnchorHTMLAttributes<HTMLAnchorElement>[];
    fadeColor?: string[] | undefined;
    fadePosition?: FadePosition | undefined;
    itemStyle?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
