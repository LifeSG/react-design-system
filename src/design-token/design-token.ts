import { getThemeDesignToken } from "../theme/design-token-helper";
import { PropertiesToType } from "../util/utility-types";
import { DesignTokenSet } from "./types";

export const DesignToken: PropertiesToType<
    DesignTokenSet,
    ReturnType<typeof getThemeDesignToken>
> = {
    InputBoxShadow: getThemeDesignToken("InputBoxShadow"),
    InputErrorBoxShadow: getThemeDesignToken("InputErrorBoxShadow"),
};
