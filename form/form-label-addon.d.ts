/// <reference types="react" />
import { ButtonProps } from "../button";
import { IconType } from "../icon";
import { FormLabelAddonProps, FormLabelAddonType } from "./types";
interface Props extends ButtonProps {
    addonType?: FormLabelAddonType | undefined;
    icon?: IconType | JSX.Element | undefined;
    "data-testid"?: string | undefined;
}
export declare const AddonTrigger: ({ addonType, icon, "data-testid": testId, ...buttonProps }: Props) => JSX.Element;
interface PopoverAddonProps {
    addon: FormLabelAddonProps;
}
export declare const PopoverAddon: ({ addon }: PopoverAddonProps) => JSX.Element;
export {};
