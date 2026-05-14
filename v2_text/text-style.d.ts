import type { PropertiesToType } from "../util/utility-types";
import { getThemeTextStyles } from "../v2_theme/text-theme-helper";
import type { V2_TextStyleSetType } from "./types";
/** @deprecated */
export declare const V2_TextStyle: PropertiesToType<V2_TextStyleSetType, ReturnType<typeof getThemeTextStyles>>;
