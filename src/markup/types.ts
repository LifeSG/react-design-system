import type { ColourCSSVariableString, FontSize } from "../theme";

type CustomCssString = string & {};
type MarkupTextSize = Exclude<FontSize, "form-label" | "form-description">;

/**
 * Props for the `Markup` component.
 */
export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent */
    baseTextSize?: MarkupTextSize | undefined;
    /** The default font color. If not specified, inherited from the parent */
    baseTextColor?: ColourCSSVariableString | CustomCssString | undefined;
    /**
     * Renders as an inline `span` instead of a block `div`.
     *
     * @default false
     */
    inline?: boolean | undefined;
}
