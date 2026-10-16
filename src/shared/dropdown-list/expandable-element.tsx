import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import clsx from "clsx";
import type { AriaAttributes, Ref } from "react";
import { forwardRef } from "react";

import { VisuallyHidden } from "../accessibility";
import { BasicButton } from "../input-wrapper";
import * as styles from "./expandable-element.styles";
import type { DropdownVariantType } from "./types";

export interface ExpandableElementProps
    extends Pick<
        AriaAttributes,
        "aria-labelledby" | "aria-describedby" | "aria-invalid"
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
     * Renders a `div` as the selector so that `children` can contain
     * interactive elements, since buttons cannot be nested. The combobox
     * semantics and focus are moved to a visually hidden button.
     */
    nestedInteractive?: boolean | undefined;
    /**
     * Text exposed to assistive technologies through the hidden button when
     * `nestedInteractive` is set, for example the current value
     */
    hiddenLabel?: string | undefined;
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
        nestedInteractive,
        hiddenLabel,
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

    if (nestedInteractive) {
        // clicks bubble up to the reference element of the dropdown wrapper,
        // so neither the div nor the hidden button needs its own click handler
        return (
            <div
                className={clsx(
                    styles.selector,
                    styles.selectorNested,
                    variant === "small" && styles.selectorVariantSmall,
                    !readOnly && styles.selectorEditable,
                    disabled && styles.selectorNestedDisabled,
                    className
                )}
            >
                <VisuallyHidden>
                    <button
                        ref={ref}
                        type="button"
                        role="combobox"
                        aria-expanded={expanded}
                        aria-haspopup={popupRole}
                        aria-controls={expanded ? listboxId : undefined}
                        data-testid="selector"
                        aria-disabled={disabled}
                        aria-readonly={readOnly}
                        {...otherProps}
                    >
                        {hiddenLabel}
                    </button>
                </VisuallyHidden>
                {children}
                {icon}
            </div>
        );
    }

    return (
        <BasicButton
            ref={ref}
            type="button"
            role="combobox"
            aria-expanded={expanded}
            aria-haspopup={popupRole}
            aria-controls={expanded ? listboxId : undefined}
            data-testid="selector"
            aria-disabled={disabled}
            aria-readonly={readOnly}
            className={clsx(
                styles.selector,
                variant === "small" && styles.selectorVariantSmall,
                !readOnly && styles.selectorEditable,
                className
            )}
            {...otherProps}
        >
            {children}
            {icon}
        </BasicButton>
    );
};

export const ExpandableElement = forwardRef(Component);
