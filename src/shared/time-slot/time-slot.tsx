import type { ReactNode } from "react";
import { forwardRef } from "react";

import * as styles from "./time-slot.styles";
import type { SlotStyle } from "./types";

export interface TimeSlotProps {
    "data-testid"?: string | undefined;
    bgColor: string;
    bgColor2?: string | undefined;
    children?: ReactNode;
    className?: string | undefined;
    clickable?: boolean | undefined;
    hoverBgColor?: string | undefined;
    hoverBgColor2?: string | undefined;
    nonClickableCursor?: "default" | "not-allowed" | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    styleType: SlotStyle;
    tabIndex?: number | undefined;
}

const Component = (
    {
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
        tabIndex,
    }: TimeSlotProps,
    ref: React.Ref<HTMLDivElement>
) => (
    <styles.StyledTimeSlot
        ref={ref}
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
        tabIndex={tabIndex}
    >
        {children}
    </styles.StyledTimeSlot>
);

export const TimeSlot = forwardRef(Component);
