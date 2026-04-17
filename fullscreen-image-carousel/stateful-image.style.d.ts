interface ImageStyleProps {
    $fit?: React.CSSProperties["objectFit"];
}
export declare const ImageWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ImageBox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, ImageStyleProps>> & string;
export declare const DefaultPlaceholder: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/image-placeholder").ImagePlaceholderProps, never>> & string & Omit<(props: import("../shared/image-placeholder").ImagePlaceholderProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
