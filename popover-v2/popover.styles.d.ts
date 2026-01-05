import { PopoverOverflowType } from "./types";
interface PopoverCardStyleProps {
    $overflow?: PopoverOverflowType | undefined;
    $maxHeight?: number | undefined;
}
export declare const PopoverContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const PopoverCard: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../card/types").CardProps, PopoverCardStyleProps>> & string & Omit<({ children, ...otherProps }: import("../card/types").CardProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const MobileModalBox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").ModalBoxProps, never>> & string & Omit<({ id, children, onClose, showCloseButton, ...otherProps }: import("..").ModalBoxProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const ContentWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
