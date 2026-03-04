import { TypographySizeType } from "../theme/font/types";
import { TypographyWeight } from "./types";
interface StyledProps {
    $textStyle: TypographySizeType;
    $weight?: TypographyWeight | undefined;
    $inline?: boolean | undefined;
    $paragraph?: boolean | undefined;
    $maxLines?: number | undefined;
    $underlineStyle?: string | undefined;
}
export declare const TypographyBase: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledProps>> & string;
export declare const HyperlinkBase: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, StyledProps>> & string;
export declare const StyledExternalIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export {};
