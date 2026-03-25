import type { RefObject } from "react";
import type { FormLabelAddonProps } from "./types";
interface PopoverAddonProps {
    addon: FormLabelAddonProps;
    rootNode?: RefObject<HTMLElement>;
}
export declare const PopoverAddon: ({ addon, rootNode, }: PopoverAddonProps) => JSX.Element;
export {};
