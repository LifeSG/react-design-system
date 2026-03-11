import {
    BorderThickness,
    ColourCSSVariableString,
    RadiusCSSVariableString,
    ValueOf,
} from "../theme";

export interface DashedBorderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
    thickness: ValueOf<typeof BorderThickness> | undefined;
    radius: RadiusCSSVariableString | undefined;
    colour: ColourCSSVariableString | undefined;
    backgroundColor: ColourCSSVariableString | undefined;
}
