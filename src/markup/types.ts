import { TypographySizeType } from "../theme/font/types";
import { ThemeStyleProps } from "../theme/types";

/**
 * Sets styling for commonly used HTML markup elements such as `<strong>` or `<a>`.
 *
 * @keywords markup, html, rich text, inline, styled content
 */
export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent. */
    baseTextSize?: TypographySizeType | undefined;
    /** The default font color. Supports theming. If not specified, inherited from the parent. */
    baseTextColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    /**
     * Specifies if element is rendered as block element `div` or inline
     * element `span`
     */
    inline?: boolean | undefined;
}
