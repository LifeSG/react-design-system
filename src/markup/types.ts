import { ThemeStyleInterpolation, TypographySizeType } from "@/theme";

export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent */
    baseTextSize?: TypographySizeType | undefined;
    /** The default font color. If not specified, inherited from the parent */
    baseTextColor?: string | ThemeStyleInterpolation | undefined;
    /**
     * Specifies if element is rendered as block element `div` or inline
     * element `span`
     */
    inline?: boolean | undefined;
}
