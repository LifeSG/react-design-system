import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import clsx from "clsx";
import type { AriaAttributes, Ref } from "react";
import { forwardRef } from "react";

import { useId } from "../../util";
import { concatIds } from "../accessibility";
import * as styles from "./expandable-element.styles";
import type { DropdownVariantType } from "./types";

export interface ExpandableElementProps
    extends Pick<
        AriaAttributes,
        "aria-label" | "aria-labelledby" | "aria-describedby" | "aria-invalid"
    > {
    children: React.ReactNode;
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
    /**
     * Id of the element that describes the current value. Use this when
     * `children` contain content that should not be part of the combobox
     * name, such as interactive elements.
     * Ignored when `aria-label` is set
     */
    valueLabelId?: string | undefined;
}

export const Component = (
    {
        children,
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
        valueLabelId,
        ...otherProps
    }: ExpandableElementProps,
    ref: Ref<HTMLButtonElement>
) => {
    const contentId = useId();

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

    // the combobox is kept separate from the content so that the content can
    // contain interactive elements, since buttons cannot be nested. It is
    // stretched over the selector, and the content lets clicks through to it.
    // Clicks bubble up to the reference element of the dropdown wrapper,
    // so neither the div nor the button needs its own click handler.
    // By default the combobox is named by the label and the content. An
    // `aria-label` is expected to include the current value
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
                className={styles.comboboxButton}
                aria-label={ariaLabel}
                aria-labelledby={
                    ariaLabel
                        ? ariaLabelledBy
                        : concatIds(ariaLabelledBy, valueLabelId ?? contentId)
                }
                aria-expanded={expanded}
                aria-haspopup={popupRole}
                aria-controls={expanded ? listboxId : undefined}
                aria-disabled={disabled}
                aria-readonly={readOnly}
                data-testid="selector"
                {...otherProps}
            />
            {/* plain content is already announced as the combobox name */}
            <div
                id={contentId}
                className={styles.content}
                aria-hidden={valueLabelId ? undefined : true}
            >
                {children}
            </div>
            {icon}
        </div>
    );
};

export const ExpandableElement = forwardRef(Component);
