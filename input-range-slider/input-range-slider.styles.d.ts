import ReactSlider from "react-slider";
interface TrackStyleProps {
    $color: string | ((props: unknown) => string);
}
interface ThumbStyleProps {
    $disabled: boolean;
    $readOnly: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IndicatorLabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../v2_text").V2_TextProps, never>;
export declare const Slider: import("styled-components").StyledComponent<typeof ReactSlider, import("styled-components").DefaultTheme, {}, never>;
export declare const Knob: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ThumbStyleProps, never>;
export declare const SliderThumb: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SliderTrack: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TrackStyleProps, never>;
export {};
