import { MainStyleProps } from "../button/types";
import { ButtonIconPosition } from "./types";
export interface MainStylePropsWithIcon extends MainStyleProps {
    $buttonIconPosition?: ButtonIconPosition | undefined;
}
export declare const MainButtonWithIcon: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, MainStyleProps & MainStylePropsWithIcon, never>;
