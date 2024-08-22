import { css } from "styled-components";
import { BorderSet } from "../types";
import { dashedBorderStyle } from "../helper";

export const LifeSgBorderSet: BorderSet = {
    "width-sm": 1,

    solid: "solid",

    "dashed-default": (
        thickness: number | ((props: any) => string) = 1,
        color: string | ((props: any) => string) = "black"
    ) => {
        return dashedBorderStyle(thickness, color);
    },
};
