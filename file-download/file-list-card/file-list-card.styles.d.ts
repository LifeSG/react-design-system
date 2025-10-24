interface BoxStyleProps {
    $error?: boolean | undefined;
}
interface ContentSectionStyleProps {
    $hasThumbnail?: boolean | undefined;
}
export declare const Item: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>> & string;
export declare const Box: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BoxStyleProps>> & string;
export declare const ContentSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContentSectionStyleProps>> & string;
export declare const NameSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ExtendedNameSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const FileSizeSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ItemNameText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ItemDescriptionText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
export declare const ErrorIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const DesktopErrorMessage: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
export declare const MobileErrorMessage: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
export declare const Spinner: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../../shared/component-loading-spinner").ComponentLoadingSpinnerProps, never>> & string & Omit<({ color, className, size, }: import("../../shared/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const ActionContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const IconButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>> & string & Omit<(props: import("../../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const ThumbnailContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Thumbnail: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../../shared/image-with-fallback/image-with-fallback").ImageWithFallbackProps, never>> & string & Omit<({ src, alt, className, "data-testid": testId, }: import("../../shared/image-with-fallback/image-with-fallback").ImageWithFallbackProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
