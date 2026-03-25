interface StyleProps {
    $showDashedBorder: boolean | undefined;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("..").DashedBorderProps & import("react").RefAttributes<HTMLDivElement>, StyleProps>> & string & Omit<(props: import("..").DashedBorderProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const HiddenInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
export declare const DragOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").DashedBorderProps & import("react").RefAttributes<HTMLDivElement>, never>> & string & Omit<(props: import("..").DashedBorderProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const OverlayText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, never>> & string;
export declare const OverlayIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export {};
