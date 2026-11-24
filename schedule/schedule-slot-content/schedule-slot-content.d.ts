import type React from "react";
import type { ScheduleSlotProps } from "../types";
interface SlotContentClassNames {
    container: string;
    blocked: string;
    available: string;
}
interface SlotContentTokens {
    offsetTop: string;
    height: string;
}
interface ScheduleSlotContentProps {
    slot: ScheduleSlotProps;
    offsetTop: number;
    classNames: SlotContentClassNames;
    tokens: SlotContentTokens;
    clickable?: boolean;
    children: React.ReactNode;
}
export declare const ScheduleSlotContent: ({ slot, offsetTop, classNames, tokens, clickable, children, }: ScheduleSlotContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
