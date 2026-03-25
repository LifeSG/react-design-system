import type { V3_TypographySizeType } from "../v3_theme/font/types";
import type { V3_ThemeStyleProps } from "../v3_theme/types";
export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent */
    baseTextSize?: V3_TypographySizeType | undefined;
    /** The default font color. If not specified, inherited from the parent */
    baseTextColor?: string | ((props: V3_ThemeStyleProps) => string) | undefined;
    /**
     * Specifies if element is rendered as block element `div` or inline
     * element `span`
     */
    inline?: boolean | undefined;
}
