import { getThemeDesignToken } from "../v2_theme/design-token-helper";
import { PropertiesToType } from "../util/utility-types";
/** @deprecated */
import { V2_DesignTokenSet } from "./types";

/** @deprecated */
export const V2_DesignToken: PropertiesToType<
    V2_DesignTokenSet,
    ReturnType<typeof getThemeDesignToken>
> = {
    InputBoxShadow: getThemeDesignToken("InputBoxShadow"),
    InputErrorBoxShadow: getThemeDesignToken("InputErrorBoxShadow"),
    ElevationBoxShadow: getThemeDesignToken("ElevationBoxShadow"),
    Table: {
        Header: getThemeDesignToken("Table.Header"),
        Cell: {
            Primary: getThemeDesignToken("Table.Cell.Primary"),
            Secondary: getThemeDesignToken("Table.Cell.Secondary"),
            Selected: getThemeDesignToken("Table.Cell.Selected"),
            Hover: getThemeDesignToken("Table.Cell.Hover"),
        },
    },
    Button: {
        Danger: {
            BackgroundColor: getThemeDesignToken(
                "Button.Danger.BackgroundColor"
            ),
            Hover: getThemeDesignToken("Button.Danger.Hover"),
            Primary: getThemeDesignToken("Button.Danger.Primary"),
            Border: getThemeDesignToken("Button.Danger.Border"),
        },
    },
};
