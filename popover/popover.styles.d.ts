/// <reference types="react" />
export declare type OffsetPosition = "top-center" | "top-left" | "top-right" | "left" | "right" | "none";
interface PopoverStyleProps {
    $visible?: boolean;
    $offset: OffsetPosition;
}
export declare const BubbleWrap: import("styled-components").StyledComponent<"div", any, PopoverStyleProps, never>;
export declare const MobileModalBox: import("styled-components").StyledComponent<({ id, children, onClose, showCloseButton, ...otherProps }: import("..").ModalBoxProps) => JSX.Element, any, {}, never>;
export declare const HOCWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HOCTrigger: import("styled-components").StyledComponent<"button", any, {}, never>;
export {};
