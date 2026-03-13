import {
    BorderThickness,
    ColourCSSVariableString,
    RadiusCSSVariableString,
} from "../theme";
import { ValueOf } from "../util/utility-types";

export interface DashedBorderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "style"> {
    enabled?: boolean;
    thickness?: ValueOf<typeof BorderThickness>;
    radius?: RadiusCSSVariableString;
    colour?: ColourCSSVariableString;
    backgroundColor?: ColourCSSVariableString;
}
