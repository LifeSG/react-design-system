import { BaseTextStyleSet } from "../spec/text-spec/base-text-style-set";
import { TextStyleSetType } from "../text/types";
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
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeTextStyles = (attributePath: string) => {
    return (props: any): string | number => {
        const theme = props.theme as ThemeSpec;
        const textStyleSet: TextStyleSetType = getCollection(
            TextStyleSpec,
            theme[ThemeContextKeys.textStyleScheme]
        );

        return theme.options && theme.options.textStyle
            ? getValue(textStyleSet, attributePath, theme.options.textStyle)
            : getValue(textStyleSet, attributePath);
    };
};
