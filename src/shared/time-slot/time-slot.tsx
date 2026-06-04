import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef, useRef } from "react";

import { useApplyStyle } from "../../theme";
import { mergeRefs } from "../../util";
import * as styles from "./time-slot.styles";
import type { SlotStyle } from "./types";

export interface TimeSlotProps {
    "data-testid"?: string | undefined;
    bgColor: string;
    bgColor2?: string | undefined;
    children?: ReactNode;
    className?: string | undefined;
    clickable?: boolean | undefined;
    fill?: "default" | "top" | "bottom" | undefined;
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
        fill = "default",
        hoverBgColor,
        hoverBgColor2,
        nonClickableCursor,
        onClick,
        styleType,
        tabIndex,
    }: TimeSlotProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const slotRef = useRef<HTMLDivElement>(null);

    useApplyStyle(slotRef, {
        [styles.tokens.slot.bgColor]: bgColor,
        [styles.tokens.slot.bgColor2]: bgColor2,
        [styles.tokens.slot.hoverBgColor]: hoverBgColor,
        [styles.tokens.slot.hoverBgColor2]: hoverBgColor2,
        [styles.tokens.slot.cursor]: nonClickableCursor,
    });

    const isHoverable = () => {
        if (!clickable) {
            return false;
        }

        if (styleType === "stripes") {
            return !!(hoverBgColor || hoverBgColor2);
        }

        return !!hoverBgColor;
    };

    return (
        <div
            ref={mergeRefs(slotRef, ref)}
            className={clsx(
                styles.timeSlot,
                {
                    [styles.timeSlotHalfFillTop]: fill === "top",
                    [styles.timeSlotHalfFillBottom]: fill === "bottom",
                },
                className
            )}
            data-style-type={styleType}
            data-clickable={!!clickable}
            data-hoverable={isHoverable()}
            onClick={onClick}
            data-testid={dataTestId}
            tabIndex={tabIndex}
        >
            {children}
        </div>
    );
};

export const TimeSlot = forwardRef(Component);
