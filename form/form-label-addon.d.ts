import { RefObject } from "react";
import { FormLabelAddonProps } from "./types";
interface PopoverAddonProps {
    addon: FormLabelAddonProps;
    rootNode?: RefObject<HTMLElement>;
}
export declare const PopoverAddon: ({ addon, rootNode, }: PopoverAddonProps) => JSX.Element;
export {};
