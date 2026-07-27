interface StyleProps {
    $collapsible?: boolean;
    $expanded?: boolean;
    $isMobile?: boolean;
}
interface DividerStyleProps {
    $showDivider: boolean;
    $showMobileDivider: boolean;
    $isMobile?: boolean;
}
interface MinimisableContentProps {
    $height?: number;
    $minimisable: boolean;
}
interface FilterItemHeaderStyleProps {
    $isMobile?: boolean;
}
interface FilterItemTitleStyleProps {
    $isMobile?: boolean;
}
export declare const FilterItemWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never>>> & string;
export declare const Divider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof DividerStyleProps> & DividerStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof DividerStyleProps> & DividerStyleProps, never>>> & string;
export declare const FilterItemHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isMobile"> & FilterItemHeaderStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isMobile"> & FilterItemHeaderStyleProps, never>>> & string;
export declare const FilterItemExpandButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, never> & Partial<Pick<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, never>>> & string & Omit<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const ChevronIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, keyof StyleProps> & StyleProps, never>>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const FilterItemTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "$isMobile"> & FilterItemTitleStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "$isMobile"> & FilterItemTitleStyleProps, never>>> & string;
export declare const ExpandableItem: import("@react-spring/web").AnimatedComponent<import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string>;
export declare const FilterItemBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const MinimisableContent: import("@react-spring/web").AnimatedComponent<import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof MinimisableContentProps> & MinimisableContentProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof MinimisableContentProps> & MinimisableContentProps, never>>> & string>;
export declare const FilterItemMinimiseButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never> & Partial<Pick<import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>>> & string & Omit<(props: import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export {};
