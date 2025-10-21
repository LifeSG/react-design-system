export type OffsetPosition = "top-center" | "top-left" | "top-right" | "left" | "right" | "none";
interface PopoverStyleProps {
    $visible?: boolean;
    $offset: OffsetPosition;
}
export declare const BubbleWrap: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PopoverStyleProps>> & string;
export declare const MobileModalBox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").ModalBoxProps, never>> & string & Omit<({ id, children, onClose, showCloseButton, ...otherProps }: import("..").ModalBoxProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const HOCWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const HOCTrigger: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
export declare const ContentWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
