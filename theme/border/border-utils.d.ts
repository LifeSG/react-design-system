import { StyledComponentProps } from "../helpers";
export declare const dashedBorderStyle: (options?: {
    thickness?: number | ((props: StyledComponentProps) => string);
    radius?: number | ((props: StyledComponentProps) => string);
    colour?: string | ((props: StyledComponentProps) => string);
}) => (props: StyledComponentProps) => import("styled-components").FlattenSimpleInterpolation;
