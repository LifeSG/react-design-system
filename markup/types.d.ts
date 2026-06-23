import type { ColourCSSVariableString, FontSize } from "../theme";
type CustomCssString = string & {};
type MarkupTextSize = Exclude<FontSize, "form-label" | "form-description">;
export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent */
    baseTextSize?: MarkupTextSize | undefined;
    /** The default font color. If not specified, inherited from the parent */
    baseTextColor?: ColourCSSVariableString | CustomCssString | undefined;
    /**
     * Specifies if element is rendered as block element `div` or inline
     * element `span`
     */
    inline?: boolean | undefined;
}
export {};
