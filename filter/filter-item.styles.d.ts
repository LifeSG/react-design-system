interface StyleProps {
    $collapsible?: boolean;
    $expanded?: boolean;
}
interface DividerStyleProps {
    $showDivider: boolean;
    $showMobileDivider: boolean;
}
interface MinimisableContentProps {
    $height?: number;
    $minimisable: boolean;
}
export declare const FilterItemWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyleProps>> & string;
export declare const Divider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DividerStyleProps>> & string;
export declare const FilterItemHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const FilterItemExpandButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, never>> & string & Omit<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const ChevronIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, StyleProps>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const FilterItemTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const ExpandableItem: import("@react-spring/web").AnimatedComponent<import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string>;
export declare const FilterItemBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const MinimisableContent: import("@react-spring/web").AnimatedComponent<import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, MinimisableContentProps>> & string>;
export declare const FilterItemMinimiseButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>> & string & Omit<(props: import("../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, keyof import("react").Component<any, {}, any>>;
export {};
