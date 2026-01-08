import { RadioButtonProps, RadioButtonSize } from "./types";
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $displaySize?: RadioButtonSize | undefined;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyleProps>> & string;
export declare const StyledUnCheckedIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, StyleProps>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const StyledCheckedIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, StyleProps>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const Input: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, RadioButtonProps>> & string;
export {};
