import { CssValue, DesignTokenSet } from "../design-token/types";
import { BaseDesignTokenSet } from "../spec/design-token-spec/base-design-token-set";
import { getCollection, getValue } from "./helper";
import {
    DesignTokenCollectionsMap,
    DesignTokenScheme,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "./types";

// =============================================================================
// THEME SPECIFICATION
// =============================================================================
const DesignTokenSpec: ThemeCollectionSpec<
    DesignTokenCollectionsMap,
    DesignTokenScheme
> = {
    collections: {
        base: BaseDesignTokenSet,
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeDesignToken = (attributePath: string) => {
    return (props: any): CssValue => {
        const theme = props.theme as ThemeSpec;
        const DesignTokenSet: DesignTokenSet = getCollection(
            DesignTokenSpec,
            theme[ThemeContextKeys.designTokenScheme]
        );

        return theme.options?.designToken
            ? getValue(DesignTokenSet, attributePath, theme.options.designToken)
            : getValue(DesignTokenSet, attributePath);
    };
};
