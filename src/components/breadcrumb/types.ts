// Generated with util/create-component.js
export interface BreadcrumbLink {
    title: string;
    url?: string;
    onClick?: () => void;
}

export type FadePosition = "left" | "right" | "both";

export interface BreadcrumbProps {
    links?: BreadcrumbLink[];
    fadeColor?: string[];
    fadePosition?: FadePosition;
    itemStyle?: string;
    id?: string;
    "data-testid"?: string;
}
