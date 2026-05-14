import type { V3_StyledComponentProps } from "../helpers";
export declare const solidBorderStyle: (options?: {
    thickness?: number | ((props: V3_StyledComponentProps) => string);
    radius?: number | ((props: V3_StyledComponentProps) => string);
    colour?: string | ((props: V3_StyledComponentProps) => string);
}) => (props: V3_StyledComponentProps) => import("styled-components").RuleSet<object>;
export declare const dashedBorderStyle: (options?: {
    thickness?: number | ((props: V3_StyledComponentProps) => string);
    radius?: number | ((props: V3_StyledComponentProps) => string);
    colour?: string | ((props: V3_StyledComponentProps) => string);
}) => (props: V3_StyledComponentProps) => import("styled-components").RuleSet<object>;
