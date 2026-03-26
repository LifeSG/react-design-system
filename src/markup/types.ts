import type { ColourCSSVariableString, FontSize } from "../theme";

type CustomCssString = string & {};

export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent */
    baseTextSize?: FontSize | undefined;
    /** The default font color. If not specified, inherited from the parent */
    baseTextColor?: ColourCSSVariableString | CustomCssString | undefined;
    /**
     * Specifies if element is rendered as block element `div` or inline
     * element `span`
     */
    inline?: boolean | undefined;
}
