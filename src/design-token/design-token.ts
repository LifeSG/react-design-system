import { getThemeDesignToken } from "../theme/design-token-helper";
import { PropertiesToType } from "../util/utility-types";
import { DesignTokenSet } from "./types";

export const DesignToken: PropertiesToType<
    DesignTokenSet,
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
};
