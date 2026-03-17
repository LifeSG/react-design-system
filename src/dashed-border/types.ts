import {
    BorderThickness,
    ColourCSSVariableString,
    RadiusCSSVariableString,
} from "../theme";
import { ValueOf } from "../util/utility-types";

type CustomCssValue = number | (string & {});
type CustomCssString = string & {};

export interface DashedBorderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "style"> {
    enabled?: boolean;
    thickness?: ValueOf<typeof BorderThickness> | CustomCssValue;
    radius?: RadiusCSSVariableString | CustomCssValue;
    colour?: ColourCSSVariableString | CustomCssString;
    backgroundColor?: ColourCSSVariableString | CustomCssString;
}
