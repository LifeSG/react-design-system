import type { ReactNode } from "react";

import type { V3_ThemeStyleProps } from "../../v3_theme";
import * as styles from "./time-slot.styles";
import type { SlotStyle } from "./types";

export interface TimeSlotProps {
    "data-testid"?: string | undefined;
    bgColor: string | ((props: V3_ThemeStyleProps) => string);
    bgColor2?: string | ((props: V3_ThemeStyleProps) => string) | undefined;
    children?: ReactNode;
    className?: string | undefined;
    clickable?: boolean | undefined;
    hoverBgColor?: string | ((props: V3_ThemeStyleProps) => string) | undefined;
    hoverBgColor2?:
        | string
        | ((props: V3_ThemeStyleProps) => string)
        | undefined;
    nonClickableCursor?: "default" | "not-allowed" | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    styleType: SlotStyle;
}

export const TimeSlot = ({
    className,
    "data-testid": dataTestId,
    bgColor,
    bgColor2,
    children,
    clickable,
    hoverBgColor,
    hoverBgColor2,
    nonClickableCursor,
    onClick,
    styleType,
}: TimeSlotProps) => (
    <styles.StyledTimeSlot
        className={className}
        $bgColor={bgColor}
        $bgColor2={bgColor2}
        $clickable={clickable}
        $hoverBgColor={hoverBgColor}
        $hoverBgColor2={hoverBgColor2}
        $nonClickableCursor={nonClickableCursor}
        $styleType={styleType}
        onClick={onClick}
        data-testid={dataTestId}
    >
        {children}
    </styles.StyledTimeSlot>
);
