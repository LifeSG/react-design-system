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
    backgroundColor?: ColourCSSVariableString | CustomCssString | undefined;
    colour?: ColourCSSVariableString | CustomCssString | undefined;
    enabled?: boolean | undefined;
    radius?: RadiusCSSVariableString | CustomCssValue | undefined;
    thickness?: ValueOf<typeof BorderThickness> | CustomCssValue | undefined;
}
