import type {
    BorderThickness,
    ColourCSSVariableString,
    RadiusCSSVariableString,
} from "../theme";
import type { ValueOf } from "../util/utility-types";

type CustomCssValue = number | (string & {});
type CustomCssString = string & {};

export interface DashedBorderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "style"> {
    /** Optional background fill behind the dashed overlay. */
    backgroundColor?: ColourCSSVariableString | CustomCssString | undefined;
    /** Border stroke colour for the dashed border. */
    colour?: ColourCSSVariableString | CustomCssString | undefined;
    /** Enables or disables rendering of the dashed stroke. */
    enabled?: boolean | undefined;
    /** Border radius of the dashed container. */
    radius?: RadiusCSSVariableString | CustomCssValue | undefined;
    /** Border thickness of the dashed stroke. */
    thickness?: ValueOf<typeof BorderThickness> | CustomCssValue | undefined;
}
