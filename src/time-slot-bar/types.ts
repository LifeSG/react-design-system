export type SlotStyle = "default" | "stripes";

export interface TimeSlotBarProps {
    testId?: string;
    startTime: string;
    endTime: string;
    slots: TimeSlot[];
    onClickSlot: (slotId: string) => void;
    defaultTimeSlot?: DefaultTimeSlot;
}

export interface DefaultTimeSlot {
    color: string;
    styleType?: SlotStyle;
    secondaryColor?: string;
    onClick?: () => void;
}

export interface TimeSlot {
    id: string;
    startTime: string;
    endTime: string;
    color: string;
    styleType?: SlotStyle;
    secondaryColor?: string;
    text?: string;
    clickable?: boolean;
}
