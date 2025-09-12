import { AriaAttributes, Ref } from "react";
import { DropdownVariantType } from "./types";
interface ExpandableElementProps {
    children: React.ReactNode;
    disabled: boolean;
    expanded: boolean;
    listboxId: string;
    popupRole: AriaAttributes["aria-haspopup"];
    readOnly: boolean;
    variant: DropdownVariantType;
}
export declare const Component: ({ children, disabled, expanded, listboxId, popupRole, readOnly, variant, }: ExpandableElementProps, ref: Ref<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
export declare const ExpandableElement: (props: ExpandableElementProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
