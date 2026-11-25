interface SlotCellStyleProps {
    $dashed?: boolean;
}
interface SlotColumnOverlayStyleProps {
    $actualWidthPercentage?: number;
    $leftPosition?: number;
}
interface HiddenColumnsStyleProps {
    $heightPercentage?: number;
}
export declare const SlotCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$dashed"> & SlotCellStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$dashed"> & SlotCellStyleProps, never>>> & string;
export declare const SlotColumnOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof SlotColumnOverlayStyleProps> & SlotColumnOverlayStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof SlotColumnOverlayStyleProps> & SlotColumnOverlayStyleProps, never>>> & string;
export declare const HiddenColumns: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$heightPercentage"> & HiddenColumnsStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$heightPercentage"> & HiddenColumnsStyleProps, never>>> & string;
export {};
