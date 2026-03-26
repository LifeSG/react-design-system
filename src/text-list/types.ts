import { TypographySizeType } from "../theme/font/types";

interface BaseListProps {
    /** The content of the list. */
    children: JSX.Element | JSX.Element[];
    /** Specifies if the list is to have a margin below (in rem with base pixel of 16). */
    bottomMargin?: number | undefined;
    /** Font size of the list. Inherited from the parent if not specified. */
    size?: TypographySizeType | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
}

export type CounterType = "lower-alpha" | "decimal" | "lower-roman";

/**
 * An ordered list component that renders items with numbering or lettering.
 *
 * @keywords ordered list, numbered list, ol, counter, sequence
 */
export interface OrderedListProps extends BaseListProps {
    /**  Values: "lower-alpha" | "decimal" | "lower-roman" */
    counterType?: CounterType | undefined;
    /** The separator between the counter and the text. It can be any string value specified. */
    counterSeparator?: string | undefined;
    /** Specifies if the list counter decrements */
    reversed?: boolean | undefined;
    /** The value to start the list count from */
    start?: number | undefined;
}

export type BulletType = "disc" | "circle" | "square" | "none";

/**
 * An unordered list component that renders items with bullet points or custom icons.
 *
 * @keywords unordered list, bullet list, ul, bullet points
 */
export interface UnorderedListProps extends BaseListProps {
    /** Values: "disc" | "circle" | "square" | "none" or custom React.ReactNode icon */
    bulletType?: BulletType | React.ReactNode | undefined;
}
