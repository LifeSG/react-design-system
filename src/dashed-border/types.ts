import {
    BorderThickness,
    ColourCSSVariableString,
    RadiusCSSVariableString,
    ValueOf,
} from "../theme";

export interface DashedBorderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
    thickness?: ValueOf<typeof BorderThickness>;
    radius?: RadiusCSSVariableString;
    colour?: ColourCSSVariableString;
    backgroundColor?: ColourCSSVariableString;
}
