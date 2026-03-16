import type { V3_BorderUtilSet } from "../types";
import { dashedBorderStyle, solidBorderStyle } from "../utils";

export const V3_DefaultBorderUtilSet: V3_BorderUtilSet = {
    solid: solidBorderStyle,
    "dashed-default": dashedBorderStyle,
};
