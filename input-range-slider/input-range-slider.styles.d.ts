import ReactSlider from "react-slider";
import { ThemeStyleProps } from "../theme/types";
interface TrackStyleProps {
    $color: string | ((props: ThemeStyleProps) => string) | undefined;
}
interface ThumbStyleProps {
    $disabled: boolean | undefined;
    $readOnly: boolean | undefined;
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const LabelContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const IndicatorLabelContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const LabelText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never> & Partial<Pick<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never>>> & string;
export declare const Slider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react-slider").ReactSliderProps<number | readonly number[]> & import("react").RefAttributes<ReactSlider<number | readonly number[]>>, never> & Partial<Pick<import("react-slider").ReactSliderProps<number | readonly number[]> & import("react").RefAttributes<ReactSlider<number | readonly number[]>>, never>>> & string & Omit<typeof ReactSlider, keyof import("react").Component<any, {}, any>>;
export declare const Knob: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ThumbStyleProps> & ThumbStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ThumbStyleProps> & ThumbStyleProps, never>>> & string;
export declare const SliderThumb: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const SliderTrack: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$color"> & TrackStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$color"> & TrackStyleProps, never>>> & string;
export {};
