/// <reference types="react" />
interface BarStyleProps {
    $selected: boolean;
    $disabled: boolean;
}
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Separator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Histogram: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Bar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BarStyleProps, never>;
export declare const Slider: import("styled-components").StyledComponent<({ value, min, max, step, minRange, numOfThumbs, colors, disabled, readOnly, ariaLabels, showSliderLabels, sliderLabelPrefix, sliderLabelSuffix, renderSliderLabel, onChange, ...otherProps }: import("../input-range-slider").InputRangeSliderProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
