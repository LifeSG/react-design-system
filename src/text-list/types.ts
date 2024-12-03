import { TypographySizeType } from "../theme/font/types";

interface BaseListProps {
    children: JSX.Element | JSX.Element[];
    bottomMargin?: number | undefined;
    // size?: V2_TextSizeType | undefined;
    size?: TypographySizeType | undefined;
}

export type CounterType = "lower-alpha" | "decimal" | "lower-roman";

export interface OrderedListProps extends BaseListProps {
    /**  Values: "lower-alpha" | "decimal" | "lower-roman" */
    counterType?: CounterType | undefined;
    counterSeparator?: string | undefined;
    /** Specifies if the list counter decrements */
    reversed?: boolean | undefined;
    /** The value to start the list count from */
    start?: number | undefined;
}

export type BulletType = "disc" | "circle" | "square" | "none";

export interface UnorderedListProps extends BaseListProps {
    /** Values: "disc" | "circle" | "square" | "none" */
    bulletType?: BulletType | undefined;
}
