interface BarStyleProps {
    $selected: boolean;
    $disabled: boolean | undefined;
}
export declare const Label: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Separator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Histogram: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Bar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BarStyleProps>> & string;
export declare const Slider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").InputRangeSliderProps, never>> & string & Omit<({ id, value, min, max, step, minRange, numOfThumbs, colors, disabled, readOnly, showSliderLabels, sliderLabelPrefix, sliderLabelSuffix, showIndicatorLabel, indicatorLabelPrefix, indicatorLabelSuffix, ariaLabels, "aria-invalid": ariaInvalid, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, renderSliderLabel, onChange, onChangeEnd, ...otherProps }: import("..").InputRangeSliderProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
