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
    /**
     * The counter style for list items.
     * - `"lower-alpha"`: Alphabetic letters (a, b, c, ...)
     * - `"decimal"`: Numbers (1, 2, 3, ...)
     * - `"lower-roman"`: Roman numerals (i, ii, iii, ...)
     */
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
    /**
     * The bullet style for list items. Accepts a predefined string or a custom icon element.
     * - `"disc"`: Filled circle
     * - `"circle"`: Hollow circle
     * - `"square"`: Square
     * - `"none"`: No bullet
     * - Custom `React.ReactNode`: Renders a custom icon as the bullet
     */
    bulletType?: BulletType | React.ReactNode | undefined;
}
