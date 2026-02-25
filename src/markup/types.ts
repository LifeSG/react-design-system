import { TypographySizeType } from "../v3_theme/font/types";
import { ThemeStyleProps } from "../v3_theme/types";

export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent */
    baseTextSize?: TypographySizeType | undefined;
    /** The default font color. If not specified, inherited from the parent */
    baseTextColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    /**
     * Specifies if element is rendered as block element `div` or inline
     * element `span`
     */
    inline?: boolean | undefined;
}
