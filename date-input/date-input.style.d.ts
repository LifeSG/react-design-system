/// <reference types="react" />
import { DateInputVariant } from "./types";
interface ContainerStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $variant?: DateInputVariant;
}
interface IndicateBarStyleProps {
    $position: "start" | "end" | "none";
    $stickTo?: "top" | "bottom";
    $disableMobile?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const ArrowRangeIcon: import("styled-components").StyledComponent<(props: import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowRight: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const IndicateBar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IndicateBarStyleProps, never>;
export {};
