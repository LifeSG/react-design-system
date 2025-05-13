import { AriaAttributes, Ref } from "react";
import { DropdownVariantType } from "./types";
interface ExpandableElementProps {
    children: React.ReactNode;
    disabled: boolean | undefined;
    expanded: boolean | undefined;
    listboxId: string;
    popupRole: AriaAttributes["aria-haspopup"];
    readOnly: boolean | undefined;
    variant: DropdownVariantType;
}
export declare const Component: ({ children, disabled, expanded, listboxId, popupRole, readOnly, variant, }: ExpandableElementProps, ref: Ref<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
export declare const ExpandableElement: (props: ExpandableElementProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null;
export {};
