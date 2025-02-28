import { BaseTextStyleSet } from "../spec/text-spec/base-text-style-set";
import { BasePlusSansJakartaStyleSet } from "../spec/text-spec/base-plus-jakarta-sans-text-style-set";
import { OneServiceTextStyleSet } from "../spec/text-spec/oneservice-text-style-set";
import { TextStyleSetType } from "../text/types";
import { getCollection, getValue } from "./helper";
import {
    FontStyleCollectionsMap,
    TextStyleScheme,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "./types";
import { PATextStyleSet } from "../spec/text-spec/pa-text-style-set";

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
        plusJakartaSans: BasePlusSansJakartaStyleSet,
        pa: PATextStyleSet,
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
