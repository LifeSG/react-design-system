import { BaseTextStyleSet } from "../spec/text-spec/base-text-style-set";
import { OneServiceTextStyleSet } from "../spec/text-spec/oneservice-text-style-set";
import { v2_TextStyleSetType } from "../v2_text/types";
import { getCollection, getValue } from "./helper";
import {
    FontStyleCollectionsMap,
    TextStyleScheme,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "./types";

// =============================================================================
// THEME SPECIFICATION
// =============================================================================
const TextStyleSpec: ThemeCollectionSpec<
    FontStyleCollectionsMap,
    TextStyleScheme
> = {
    collections: {
        base: BaseTextStyleSet,
        oneservice: OneServiceTextStyleSet,
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeTextStyles = (attributePath: string) => {
    return (props: any): string | number => {
        const theme = props.theme as ThemeSpec;
        const textStyleSet: v2_TextStyleSetType = getCollection(
            TextStyleSpec,
            theme[ThemeContextKeys.textStyleScheme]
        );

        return theme.options && theme.options.textStyle
            ? getValue(textStyleSet, attributePath, theme.options.textStyle)
            : getValue(textStyleSet, attributePath);
    };
};
