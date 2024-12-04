import { BaseTextStyleSet } from "../spec/text-spec/base-text-style-set";
import { BasePlusSansJakartaStyleSet } from "../spec/text-spec/base-plus-jakarta-sans-text-style-set";
import { OneServiceTextStyleSet } from "../spec/text-spec/oneservice-text-style-set";
import { V2_TextStyleSetType } from "../v2_text/types";
import { getCollection, getValue } from "./helper";
import {
    V2_FontStyleCollectionsMap,
    V2_TextStyleScheme,
    V2_ThemeCollectionSpec,
    V2_ThemeContextKeys,
    V2_ThemeSpec,
} from "./types";

// =============================================================================
// THEME SPECIFICATION
// =============================================================================
const TextStyleSpec: V2_ThemeCollectionSpec<
    V2_FontStyleCollectionsMap,
    V2_TextStyleScheme
> = {
    collections: {
        base: BaseTextStyleSet,
        oneservice: OneServiceTextStyleSet,
        plusJakartaSans: BasePlusSansJakartaStyleSet,
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeTextStyles = (attributePath: string) => {
    return (props: any): string | number => {
        const theme = (props.theme?._v2 || props.theme) as V2_ThemeSpec;
        const textStyleSet: V2_TextStyleSetType = getCollection(
            TextStyleSpec,
            theme?.[V2_ThemeContextKeys.textStyleScheme]
        );

        return theme.options && theme.options.textStyle
            ? getValue(textStyleSet, attributePath, theme.options.textStyle)
            : getValue(textStyleSet, attributePath);
    };
};
