import { BaseTextStyleSet } from "../spec/text-spec/base-text-style-set";
import { OneServiceTextStyleSet } from "../spec/text-spec/oneservice-text-style-set";
import type { ThemeSpec } from "../theme/types";
import { V2_TextStyleSetType } from "../v2_text/types";
import { getCollection, getValue } from "./helper";
import {
    V2_FontStyleCollectionsMap,
    V2_TextStyleScheme,
    V2_ThemeCollectionSpec,
    V2_ThemeContextKeys,
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
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeTextStyles = (attributePath: string) => {
    return (props: any): string | number => {
        const theme = props.theme as ThemeSpec;
        const textStyleSet: V2_TextStyleSetType = getCollection(
            TextStyleSpec,
            theme?._v2?.[V2_ThemeContextKeys.textStyleScheme]
        );

        return theme?._v2?.options?.textStyle
            ? getValue(textStyleSet, attributePath, theme._v2.options.textStyle)
            : getValue(textStyleSet, attributePath);
    };
};
