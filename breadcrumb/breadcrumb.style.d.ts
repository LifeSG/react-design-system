interface FadeProps {
    $backgroundColor?: string[];
    $position?: "left" | "right";
}
interface ItemStyleProps {
    $styleProps?: string;
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Content: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never>>> & string;
export declare const Fade: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FadeProps> & FadeProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FadeProps> & FadeProps, never>>> & string;
export declare const Item: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "$styleProps"> & ItemStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "$styleProps"> & ItemStyleProps, never>>> & string;
export declare const Caret: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never> & Partial<Pick<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const Slash: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyProps & {
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
export declare const CurrentLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyProps & {
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
export declare const PreviousLink: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyLinkProps & {
    ref?: import("react").RefObject<HTMLAnchorElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never> & Partial<Pick<import("..").TypographyLinkProps & {
    ref?: import("react").RefObject<HTMLAnchorElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never>>> & string;
export {};
