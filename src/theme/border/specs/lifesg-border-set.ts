import { BorderSet } from "../types";
import { dashedBorderStyle } from "../border-utils";
import { StyledComponentProps } from "../../helpers";
import { ColourSemantic } from "../../colour-semantic/theme-helper";

export const LifeSgBorderSet: BorderSet = {
    "width-010": 1,
    "width-020": 2,
    "width-040": 4,

    solid: "solid",

    "dashed-default": (
        thickness: number | ((props: StyledComponentProps) => number) = 1,
        colour:
            | string
            | ((props: StyledComponentProps) => string) = ColourSemantic.border
    ) => {
        return dashedBorderStyle(thickness, colour);
    },
};
