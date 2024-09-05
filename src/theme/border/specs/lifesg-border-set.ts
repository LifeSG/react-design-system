import { BorderSet } from "../types";
import { dashedBorderStyle } from "../theme-helper";

export const LifeSgBorderSet: BorderSet = {
    "width-010": 1,
    "width-020": 2,

    solid: "solid",

    "dashed-default": (
        thickness: number | ((props: any) => string) = 1,
        color: string | ((props: any) => string) = "black"
    ) => {
        return dashedBorderStyle(thickness, color);
    },
};
