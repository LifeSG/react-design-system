interface LabelStyleProps {
    $inactive?: boolean;
}
export declare const HashContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../input-group/input-group.style").AddonStyleProps> & import("../input-group/input-group.style").AddonStyleProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
export declare const FloorInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../input").InputProps & import("react").RefAttributes<HTMLInputElement>, never>> & string & Omit<(props: import("../input").InputProps & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const UnitInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("../input").InputProps & import("react").RefAttributes<HTMLInputElement>, never>, never>> & string;
export declare const UnitNumberDivider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, LabelStyleProps>> & string;
export declare const ReadOnlyContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ReadOnlyLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, LabelStyleProps>> & string;
export {};
