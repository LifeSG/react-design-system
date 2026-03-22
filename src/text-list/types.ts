import { TextSizeType } from "../text/types";

interface BaseListProps {
    children: JSX.Element | JSX.Element[];
    bottomMargin?: number | undefined;
    size?: TextSizeType | undefined;
}

export type CounterType = "lower-alpha" | "decimal" | "lower-roman";

/**
 * Ordered list component props - numbered or lettered list.
 *
 * Renders an `<ol>` with configurable counter style, separator, start
 * value, and optional reverse counting.
 *
 * @example
 * ```tsx
 * <TextList.Ol counterType="decimal">
 *     <li>First</li>
 *     <li>Second</li>
 * </TextList.Ol>
 * ```
 * @keywords ordered list, unordered list, bullet list, numbered list, list component
 */
export interface OrderedListProps extends BaseListProps {
    /**
     * The numbering system for the list counter.
     *
     * @default "decimal"
     */
    counterType?: CounterType | undefined;
    /** The separator string rendered between the counter and the item text. */
    counterSeparator?: string | undefined;
    /**
     * When `true`, the list counter decrements (e.g. 5, 4, 3...).
     *
     * @default false
     */
    reversed?: boolean | undefined;
    /** The value to start the list count from. */
    start?: number | undefined;
}

export type BulletType = "disc" | "circle" | "square" | "none";

/**
 * Unordered list component props - bulleted list.
 *
 * Renders an `<ul>` with a configurable bullet style.
 *
 * @example
 * ```tsx
 * <TextList.Ul bulletType="disc">
 *     <li>Item one</li>
 *     <li>Item two</li>
 * </TextList.Ul>
 * ```
 */
export interface UnorderedListProps extends BaseListProps {
    /**
     * The bullet marker style.
     *
     * @default "disc"
     */
    bulletType?: BulletType | undefined;
}
