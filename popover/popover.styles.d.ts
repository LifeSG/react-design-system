export type OffsetPosition = "top-center" | "top-left" | "top-right" | "left" | "right" | "none";
interface PopoverStyleProps {
    $visible?: boolean;
    $offset: OffsetPosition;
}
export declare const BubbleWrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, PopoverStyleProps, never>;
export declare const MobileModalBox: import("styled-components").StyledComponent<({ id, children, onClose, showCloseButton, ...otherProps }: import("..").ModalBoxProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const HOCWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HOCTrigger: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const ContentWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
