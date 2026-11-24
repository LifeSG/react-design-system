import type { AriaAttributes, Ref } from "react";
import type { DropdownVariantType } from "./types";
export interface ExpandableElementProps extends Pick<AriaAttributes, "aria-label" | "aria-labelledby" | "aria-describedby" | "aria-invalid"> {
    /**
     * The current value, rendered inside the combobox and announced as its
     * content. Must be phrasing content (no divs, no interactive elements)
     */
    children: React.ReactNode;
    /**
     * Content rendered alongside the combobox, e.g. interactive tags.
     * It is exposed to assistive technologies, so decorative parts
     * should be aria-hidden
     */
    content?: React.ReactNode | undefined;
    className?: string | undefined;
    disabled: boolean | undefined;
    expanded: boolean | undefined;
    listboxId: string;
    popupRole: AriaAttributes["aria-haspopup"];
    readOnly: boolean | undefined;
    variant?: DropdownVariantType | undefined;
    /**
     * Uses a min-height instead of a fixed height, so that `children` can
     * grow over multiple lines
     */
    dynamicHeight?: boolean | undefined;
}
export declare const Component: ({ children, content, className, disabled, expanded, listboxId, popupRole, readOnly, variant, dynamicHeight, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...otherProps }: ExpandableElementProps, ref: Ref<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
export declare const ExpandableElement: (props: ExpandableElementProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
