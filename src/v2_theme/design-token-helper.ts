import { CssValue, V2_DesignTokenSet } from "../v2_design-token/types";

import { BaseDesignTokenSet } from "../spec/design-token-spec/base-design-token-set";
import { RBSDesignTokenSet } from "../spec/design-token-spec/rbs-design-token-set";
import { getCollection, getValue } from "./helper";
import {
    V2_DesignTokenCollectionsMap,
    V2_DesignTokenScheme,
    V2_ThemeCollectionSpec,
    V2_ThemeContextKeys,
    V2_ThemeSpec,
} from "./types";

// =============================================================================
// THEME SPECIFICATION
// =============================================================================
const DesignTokenSpec: V2_ThemeCollectionSpec<
    V2_DesignTokenCollectionsMap,
    V2_DesignTokenScheme
> = {
    collections: {
        base: BaseDesignTokenSet,
        rbs: RBSDesignTokenSet,
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeDesignToken = (attributePath: string) => {
    return (props: any): CssValue => {
        const theme = props.theme as V2_ThemeSpec;
        const DesignTokenSet: V2_DesignTokenSet = getCollection(
            DesignTokenSpec,
            theme[V2_ThemeContextKeys.designTokenScheme]
        );

        return theme.options?.designToken
            ? getValue(DesignTokenSet, attributePath, theme.options.designToken)
            : getValue(DesignTokenSet, attributePath);
    };
};
