/// <reference types="react" />
import { V2_TextSizeType } from "../v2_text/types";
interface BaseListProps {
    children: JSX.Element | JSX.Element[];
    bottomMargin?: number | undefined;
    size?: V2_TextSizeType | undefined;
}
/** @deprecated */
export type V2_CounterType = "lower-alpha" | "decimal" | "lower-roman";
/** @deprecated */
export interface V2_OrderedListProps extends BaseListProps {
    /**  Values: "lower-alpha" | "decimal" | "lower-roman" */
    counterType?: V2_CounterType | undefined;
    counterSeparator?: string | undefined;
    /** Specifies if the list counter decrements */
    reversed?: boolean | undefined;
    /** The value to start the list count from */
    start?: number | undefined;
}
/** @deprecated */
export type V2_BulletType = "disc" | "circle" | "square" | "none";
/** @deprecated */
export interface V2_UnorderedListProps extends BaseListProps {
    /** Values: "disc" | "circle" | "square" | "none" */
    bulletType?: V2_BulletType | undefined;
}
export {};
