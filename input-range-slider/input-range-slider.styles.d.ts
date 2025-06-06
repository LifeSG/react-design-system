import ReactSlider from "react-slider";
import { ThemeStyleProps } from "../theme/types";
interface TrackStyleProps {
    $color: string | ((props: ThemeStyleProps) => string) | undefined;
}
interface ThumbStyleProps {
    $disabled: boolean | undefined;
    $readOnly: boolean | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IndicatorLabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const Slider: import("styled-components").StyledComponent<typeof ReactSlider, import("styled-components").DefaultTheme, {}, never>;
export declare const Knob: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ThumbStyleProps, never>;
export declare const SliderThumb: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SliderTrack: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TrackStyleProps, never>;
export {};
