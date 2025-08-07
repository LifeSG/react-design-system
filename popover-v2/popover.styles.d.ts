import { PopoverOverflowType } from "./types";
interface PopoverCardStyleProps {
    $overflow?: PopoverOverflowType | undefined;
    $maxHeight?: number | undefined;
}
export declare const PopoverContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const PopoverCard: import("styled-components").StyledComponent<({ children, ...otherProps }: import("../card/types").CardProps) => JSX.Element, import("styled-components").DefaultTheme, PopoverCardStyleProps, never>;
export declare const MobileModalBox: import("styled-components").StyledComponent<({ id, children, onClose, showCloseButton, ...otherProps }: import("..").ModalBoxProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const ContentWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
