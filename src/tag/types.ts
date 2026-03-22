import React from "react";

export type TagType = "outline" | "solid";
export type TagColorType =
    | "black"
    | "grey"
    | "green"
    | "yellow"
    | "red"
    | "blue";

/**
 * Props for the Tag component - interactive label badge.
 *
 * Like `Pill` but supports an interactive state with pointer cursor and
 * press effects. Inherits all `HTMLElement` attributes.
 *
 * @example
 * ```tsx
 * <Tag type="solid" colorType="blue" interactive onClick={handleClick}>Featured</Tag>
 * ```
 * @keywords label badge, chip, category tag, clickable badge, status chip
 */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
    /** The display style of the Tag. */
    type: TagType;
    /**
     * The color scheme of the Tag.
     *
     * @default "black"
     */
    colorType?: TagColorType | undefined;
    /** An optional icon element rendered before the label text. */
    icon?: JSX.Element | undefined;
    /**
     * When `true`, the tag responds to pointer interactions (cursor change and
     * active/hover effects).
     *
     * @default false
     */
    interactive?: boolean | undefined;
}
