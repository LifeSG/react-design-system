import { InputWrapperStyleProps } from "../shared/input-wrapper";
import { InputGroupAddonPosition } from "./types";
export interface AddonStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}
export declare const AddonWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof InputWrapperStyleProps> & InputWrapperStyleProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, InputWrapperStyleProps>> & string;
export declare const NoAddonWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof InputWrapperStyleProps> & InputWrapperStyleProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, AddonStyleProps>> & string;
export declare const MainInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").InputProps & import("react").RefAttributes<HTMLInputElement>, never>> & string & Omit<(props: import("..").InputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const LabelAddonContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, AddonStyleProps>> & string;
