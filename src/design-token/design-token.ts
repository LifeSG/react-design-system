import { getThemeDesignToken } from "../theme/design-token-helper";
import { DesignTokenSet } from "./types";

export const DesignToken: Record<
    keyof DesignTokenSet,
    ReturnType<typeof getThemeDesignToken>
> = {
    InputBoxShadow: getThemeDesignToken("InputBoxShadow"),
    InputErrorBoxShadow: getThemeDesignToken("InputErrorBoxShadow"),
};
