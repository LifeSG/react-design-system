import { V2_ColorSet } from "../v2_color/types";
import { BaseColorSet } from "../spec/color-spec/base-color-set";
import { BookingSGColorSet } from "../spec/color-spec/bookingsg-color-set";
import { CCubeColorSet } from "../spec/color-spec/ccube-color-set";
import { MyLegacyColorSet } from "../spec/color-spec/mylegacy-color-set";
import { OneServiceColorSet } from "../spec/color-spec/oneservice-color-set";
import { RBSColorSet } from "../spec/color-spec/rbs-color-set";
import { getCollection, getValue } from "./helper";
import {
    V2_ColorCollectionsMap,
    V2_ColorScheme,
    V2_ThemeCollectionSpec,
    V2_ThemeContextKeys,
    V2_ThemeSpec,
} from "./types";

// =============================================================================
// THEME SPECIFICATION
// =============================================================================
const ColorSpec: V2_ThemeCollectionSpec<
    V2_ColorCollectionsMap,
    V2_ColorScheme
> = {
    collections: {
        base: BaseColorSet,
        bookingsg: BookingSGColorSet,
        rbs: RBSColorSet,
        mylegacy: MyLegacyColorSet,
        ccube: CCubeColorSet,
        oneservice: OneServiceColorSet,
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeColors = (attributePath: string) => {
    return (props: any): string => {
        const theme = props.theme as V2_ThemeSpec;
        const colorSet: V2_ColorSet = getCollection(
            ColorSpec,
            theme[V2_ThemeContextKeys.colorScheme]
        );

        return theme.options && theme.options.color
            ? (getValue(colorSet, attributePath, theme.options.color) as string)
            : (getValue(colorSet, attributePath) as string);
    };
};