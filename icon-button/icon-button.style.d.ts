import { SizeType, StyleType } from "./types";
interface StyleProps {
    $styleType: StyleType | "disabled";
    $sizeType: SizeType;
}
export declare const Main: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof StyleProps> & StyleProps, never>>> & string;
export {};
