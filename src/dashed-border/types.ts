// @storybookSkipFile

import type {
    BorderThickness,
    ColourCSSVariableString,
    RadiusCSSVariableString,
} from "../theme";
import type { ValueOf } from "../util/utility-types";

type CustomCssValue = number | (string & {});
type CustomCssString = string & {};

/** Props for the `DashedBorder` component. */
export interface DashedBorderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "style"> {
    /**
     * Optional background fill applied inside the container, behind the dashed overlay.
     *
     * @remarks If this prop is provided, the background colour remains
     * visible even when `enabled` is `false`
     */
    backgroundColor?: ColourCSSVariableString | CustomCssString | undefined;
    /**
     * Stroke colour for the dashed border.
     *
     * @default Colour["border"]
     */
    colour?: ColourCSSVariableString | CustomCssString | undefined;
    /**
     * Whether the dashed stroke is rendered.
     *
     * @default true
     */
    enabled?: boolean | undefined;
    /**
     * Corner radius of the container and the dashed stroke.
     *
     * @default Radius["none"]
     */
    radius?: RadiusCSSVariableString | CustomCssValue | undefined;
    /**
     * Width of the dashed stroke.
     *
     * @default BorderThickness["width-010"]
     */
    thickness?: ValueOf<typeof BorderThickness> | CustomCssValue | undefined;
}
