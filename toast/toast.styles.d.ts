/// <reference types="react" />
import { ToastType } from "./types";
interface StyleProps {
    $type: ToastType;
}
export declare const Wrapper: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const TextContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, import("../text").TextProps & StyleProps, never>;
export declare const Description: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const CloseIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const DismissButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, StyleProps, never>;
export {};
