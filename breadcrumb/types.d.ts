import { FadeColorSet, FadePosition } from "../shared/fade-wrapper";
export type { FadeColorSet, FadePosition };
export type SeparatorStyle = "chevron" | "slash";
export interface BreadcrumbProps {
    links: React.AnchorHTMLAttributes<HTMLAnchorElement>[];
    fadeColor?: string[] | FadeColorSet | undefined;
    fadePosition?: FadePosition | undefined;
    itemStyle?: string | undefined;
    separatorStyle?: SeparatorStyle | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
