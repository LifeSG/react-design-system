import { RefObject } from "react";
interface Options<T> {
    maxWidth: number;
    targetRef?: RefObject<T>;
}
/**
 * Detect if container width satisfies the breakpoint
 */
export declare const useContainerQuery: <T extends HTMLElement>({ maxWidth, targetRef, }: Options<T>) => boolean;
export {};
