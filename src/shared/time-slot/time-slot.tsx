import type { ReactNode } from "react";

import type { TimeSlotStyleProps } from "./time-slot.styles";
import * as styles from "./time-slot.styles";

export interface TimeSlotProps extends TimeSlotStyleProps {
    children?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    ["data-testid"]?: string;
}

export const TimeSlot = ({
    children,
    onClick,
    "data-testid": dataTestId,
    ...styleProps
}: TimeSlotProps) => (
    <styles.StyledTimeSlot
        {...styleProps}
        onClick={onClick}
        data-testid={dataTestId}
    >
        {children}
    </styles.StyledTimeSlot>
);
