import { getThemeDesignToken } from "../v2_theme/design-token-helper";

/** @deprecated */
// Using type assertion to bypass type checking since this will be deprecated soon
export const V2_DesignToken = {
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
