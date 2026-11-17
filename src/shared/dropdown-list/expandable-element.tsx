import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import clsx from "clsx";
import type { AriaAttributes, Ref } from "react";
import { forwardRef } from "react";

import * as styles from "./expandable-element.styles";
import type { DropdownVariantType } from "./types";

export interface ExpandableElementProps
    extends Pick<
        AriaAttributes,
        "aria-label" | "aria-labelledby" | "aria-describedby" | "aria-invalid"
    > {
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

export const Component = (
    {
        children,
        content,
        className,
        disabled,
        expanded,
        listboxId,
        popupRole,
        readOnly,
        variant,
        dynamicHeight,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        ...otherProps
    }: ExpandableElementProps,
    ref: Ref<HTMLButtonElement>
) => {
    const icon = !readOnly && (
        <div
            className={clsx(
                styles.iconContainer,
                expanded && styles.iconContainerExpanded
            )}
        >
            <ChevronDownIcon aria-hidden />
        </div>
    );

    return (
        <div
            className={clsx(
                styles.selector,
                dynamicHeight && styles.selectorDynamicHeight,
                variant === "small" && styles.selectorVariantSmall,
                !readOnly && styles.selectorEditable,
                disabled && styles.selectorDisabled,
                className
            )}
        >
            <button
                ref={ref}
                type="button"
                role="combobox"
                className={clsx(
                    styles.comboboxButton,
                    content && styles.comboboxButtonOverlay
                )}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                aria-expanded={expanded}
                aria-haspopup={popupRole}
                aria-controls={expanded ? listboxId : undefined}
                aria-disabled={disabled}
                aria-readonly={readOnly}
                data-testid="selector"
                {...otherProps}
            >
                {children}
            </button>
            {content && <div className={styles.content}>{content}</div>}
            {icon}
        </div>
    );
};

export const ExpandableElement = forwardRef(Component);
