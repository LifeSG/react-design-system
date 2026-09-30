import { PopoverOverflowType } from "../popover-v2/types";
interface MenuPanelStylesProps {
    $overflow?: PopoverOverflowType | undefined;
    $maxHeight?: number | undefined;
}
export declare const MenuPanel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof MenuPanelStylesProps> & MenuPanelStylesProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof MenuPanelStylesProps> & MenuPanelStylesProps, never>>> & string;
export {};
