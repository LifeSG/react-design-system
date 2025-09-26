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
export declare const SlotCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SlotCellStyleProps>> & string;
export declare const SlotColumnOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SlotColumnOverlayStyleProps>> & string;
export declare const HiddenColumns: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, HiddenColumnsStyleProps>> & string;
export {};
