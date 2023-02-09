import { getThemeDesignToken } from "../theme/design-token-helper";
import { DesignTokenSet } from "./types";

export const DesignToken: DesignTokenSet = {
    InputBoxShadow: getThemeDesignToken("InputBoxShadow"),
    InputErrorBoxShadow: getThemeDesignToken("InputErrorBoxShadow"),
};
