import type React from "react";
import type { PositionedSlot } from "./types";
interface SlotContentProps {
    positionedSlot: PositionedSlot;
    blockedMessage?: string;
}
export declare const SlotContent: React.FC<SlotContentProps>;
export {};
