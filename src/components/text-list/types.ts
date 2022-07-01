import { TTextSizeType } from "../styles/spec/text/types";

interface BaseListProps {
    children: JSX.Element | JSX.Element[];
    bottomMargin?: number;
    size?: TTextSizeType;
}

export type CounterType = "lower-alpha" | "decimal" | "lower-roman";

export interface OrderedListProps extends BaseListProps {
    counterType?: CounterType;
    counterSeparator?: string;
    reversed?: boolean;
    start?: number;
}

export type BulletType = "disc" | "circle" | "square" | "none";

export interface UnorderedListProps extends BaseListProps {
    bulletType?: BulletType;
}
