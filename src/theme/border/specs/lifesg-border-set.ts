import { BorderSet } from "../types";
import { dashedBorderStyle } from "../theme-helper";
import { StyledComponentProps } from "../../helpers";
import { Colour } from "../../index";

export const LifeSgBorderSet: BorderSet = {
    "width-010": 1,
    "width-020": 2,

    solid: "solid",

    "dashed-default": (
        thickness: number | ((props: StyledComponentProps) => number) = 1,
        colour:
            | string
            | ((props: StyledComponentProps) => string) = Colour.border
    ) => {
        return dashedBorderStyle(thickness, colour);
    },
};
