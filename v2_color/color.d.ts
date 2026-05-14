import type { PropertiesToType } from "../util/utility-types";
import { getThemeColors } from "../v2_theme/color-theme-helper";
import type { V2_ColorSet } from "./types";
/** @deprecated */
export declare const V2_Color: PropertiesToType<V2_ColorSet, ReturnType<typeof getThemeColors>>;
