import { InputGroupAddonPosition } from "./types";
interface StyleProps {
    $readOnly?: boolean;
    $expanded?: boolean;
    $position?: InputGroupAddonPosition;
}
interface DividerStyleProps {
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}
export declare const FieldWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../shared/input-wrapper").InputWrapperStyleProps> & import("../shared/input-wrapper").InputWrapperStyleProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, StyleProps>> & string;
export declare const FieldSelector: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const FieldInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../input").InputProps & import("react").RefAttributes<HTMLInputElement>, StyleProps>> & string & Omit<(props: import("../input").InputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const SelectorReadOnly: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Divider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DividerStyleProps>> & string;
export {};
