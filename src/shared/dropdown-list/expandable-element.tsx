import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import clsx from "clsx";
import type { AriaAttributes, Ref } from "react";
import { forwardRef } from "react";

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
        ...otherProps
    }: ExpandableElementProps,
    ref: Ref<HTMLButtonElement>
) => {
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
                readOnly ? styles.selectorReadOnly : styles.selectorEditable,
                className
            )}
            {...otherProps}
        >
            {children}
            {!readOnly && (
                <div
                    className={clsx(
                        styles.iconContainer,
                        expanded && styles.iconContainerExpanded
                    )}
                >
                    <ChevronDownIcon aria-hidden />
                </div>
            )}
        </BasicButton>
    );
};

export const ExpandableElement = forwardRef(Component);
