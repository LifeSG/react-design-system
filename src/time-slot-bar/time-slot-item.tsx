import clsx from "clsx";
import { type MouseEvent, useRef } from "react";

import { Colour, useApplyStyle } from "../theme";
import { getVariantClass } from "./helper";
import * as styles from "./time-slot-bar.styles";
import type { TimeSlotBarVariant } from "./types";

interface TimeSlotItemProps {
    children: React.ReactNode;
    color?: string;
    dataTestId?: string;
    onClick?: (() => void) | ((evt: MouseEvent<HTMLElement>) => void);
    slotOffset: number;
    slotWidth: number;
    variant: TimeSlotBarVariant;
}

const TimeSlotItem = ({
    children,
    color,
    dataTestId,
    onClick,
    slotOffset,
    slotWidth,
    variant,
}: TimeSlotItemProps) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useApplyStyle(itemRef, {
        [styles.tokens.item.width]: `${slotWidth}px`,
        [styles.tokens.item.left]: `${slotOffset}px`,
        [styles.tokens.item.color]: color || Colour.text,
    });

    return (
        <div
            ref={itemRef}
            data-testid={dataTestId}
            className={getVariantClass(
                variant,
                clsx(styles.timeSlotItem, styles.timeSlotItemDefault),
                clsx(styles.timeSlotItem, styles.timeSlotItemMinified)
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default TimeSlotItem;
