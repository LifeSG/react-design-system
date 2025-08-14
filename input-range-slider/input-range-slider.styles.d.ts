import ReactSlider from "react-slider";
import { ThemeStyleProps } from "../theme/types";
interface TrackStyleProps {
    $color: string | ((props: ThemeStyleProps) => string) | undefined;
}
interface ThumbStyleProps {
    $disabled: boolean | undefined;
    $readOnly: boolean | undefined;
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const LabelContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const IndicatorLabelContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const LabelText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, import("../typography").TypographyProps>, keyof import("../typography").TypographyProps> & import("../typography").TypographyProps, never>> & string;
export declare const Slider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react-slider").ReactSliderProps<number | readonly number[]> & import("react").RefAttributes<ReactSlider<number | readonly number[]>>, never>> & string & Omit<typeof ReactSlider, keyof import("react").Component<any, {}, any>>;
export declare const Knob: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThumbStyleProps>> & string;
export declare const SliderThumb: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const SliderTrack: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TrackStyleProps>> & string;
export {};
