import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import { getVariantClass } from "./helper";
import * as styles from "./time-slot-bar.styles";
import type { TimeSlotBarVariant } from "./types";

interface TimeSlotDividerProps {
    variant: TimeSlotBarVariant;
    left?: number;
    dataTestId?: string;
}

const TimeSlotDivider = ({
    variant,
    left,
    dataTestId,
}: TimeSlotDividerProps) => {
    const dividerRef = useRef<HTMLDivElement>(null);

    useApplyStyle(dividerRef, {
        [styles.tokens.border.left]:
            left === undefined ? undefined : `${left}px`,
    });

    return (
        <div
            ref={dividerRef}
            data-testid={dataTestId}
            className={getVariantClass(
                variant,
                clsx(styles.timeSlotBorder, styles.timeSlotBorderDefault),
                clsx(styles.timeSlotBorder, styles.timeSlotBorderMinified)
            )}
        />
    );
};

export default TimeSlotDivider;
