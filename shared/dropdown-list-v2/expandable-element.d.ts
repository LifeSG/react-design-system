import type { AriaAttributes, Ref } from "react";
import type { DropdownVariantType } from "./types";
export interface ExpandableElementProps extends Pick<AriaAttributes, "aria-labelledby" | "aria-describedby" | "aria-invalid"> {
    children: React.ReactNode;
    disabled: boolean | undefined;
    expanded: boolean | undefined;
    listboxId: string;
    popupRole: AriaAttributes["aria-haspopup"];
    readOnly: boolean | undefined;
    variant?: DropdownVariantType | undefined;
}
export declare const Component: ({ children, disabled, expanded, listboxId, popupRole, readOnly, variant, ...otherProps }: ExpandableElementProps, ref: Ref<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
export declare const ExpandableElement: (props: ExpandableElementProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
