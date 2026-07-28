import type { FontSize } from "../theme";

/**
 * Text size tokens available for list content.
 */
export type TextListSize = Exclude<FontSize, "form-label" | "form-description">;

// @storybookSkipProps
/** Shared props for both ordered and unordered text list variants. */
interface BaseListProps {
    children: JSX.Element | JSX.Element[];
    /** Bottom margin in pixels applied to each list item except the last. */
    bottomMargin?: number | undefined;
    /** Text size applied to the list content. */
    size?: TextListSize | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
}

/** Counter style applied to each item in an ordered list. */
export type CounterType = "lower-alpha" | "decimal" | "lower-roman";

/**
 * Props for the `TextList.Ol` component.
 */
export interface OrderedListProps extends BaseListProps {
    /**
     * Counter style applied to each list item.
     *
     * @default "decimal"
     */
    counterType?: CounterType | undefined;
    /**
     * Character or string rendered after each counter value.
     *
     * @default ")"
     */
    counterSeparator?: string | undefined;
    /** The counter is decremented from the start value instead of incremented. */
    reversed?: boolean | undefined;
    /** The value to start the list count from. */
    start?: number | undefined;
}

/** Predefined bullet marker style for an unordered list. */
export type BulletType = "disc" | "circle" | "square" | "none";
type CustomBulletIcon = Exclude<React.ReactNode, string>;

/**
 * Props for the `TextList.Ul` component.
 */
export interface UnorderedListProps extends BaseListProps {
    /**
     * Marker style for list items. Pass a `BulletType` token for a predefined
     * marker, or any React node to render a custom decorative icon before each
     * item's content.
     *
     * @default "disc"
     */
    bulletType?: BulletType | CustomBulletIcon | undefined;
}
