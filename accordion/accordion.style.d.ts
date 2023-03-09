/// <reference types="react" />
import { TitleStyleProps, TitleWrapperStyleProps } from "./types";
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TitleWrapper: import("styled-components").StyledComponent<"div", any, TitleWrapperStyleProps, never>;
export declare const Title: import("styled-components").StyledComponent<"h2", any, import("..").TextProps & TitleStyleProps, never>;
export declare const ExpandCollapseLink: import("styled-components").StyledComponent<(props: import("../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, {}, never>;
