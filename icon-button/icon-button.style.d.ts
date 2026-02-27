import { SizeType, StyleType } from "./types";
interface StyleProps {
    $styleType: StyleType | "disabled";
    $sizeType: SizeType;
}
export declare const Main: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyleProps>> & string;
export {};
