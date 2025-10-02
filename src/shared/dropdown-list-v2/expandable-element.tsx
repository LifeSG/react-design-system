import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { AriaAttributes, Ref, forwardRef } from "react";
import { IconContainer, Selector } from "./expandable-element.styles";
import { DropdownVariantType } from "./types";

interface ExpandableElementProps
    extends Pick<
        AriaAttributes,
        "aria-labelledby" | "aria-describedby" | "aria-invalid"
    > {
    children: React.ReactNode;
    disabled: boolean | undefined;
    expanded: boolean | undefined;
    listboxId: string;
    popupRole: AriaAttributes["aria-haspopup"];
    readOnly: boolean | undefined;
    variant?: DropdownVariantType | undefined;
    onKeyDown?: ((e: React.KeyboardEvent) => void) | undefined;
}

export const Component = (
    {
        children,
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
    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Selector
            ref={ref}
            type="button"
            role="combobox"
            aria-expanded={expanded}
            aria-haspopup={popupRole}
            aria-controls={listboxId}
            data-testid="selector"
            disabled={disabled}
            $variant={variant}
            $readOnly={readOnly}
            {...otherProps}
        >
            {children}
            {!readOnly && (
                <IconContainer $expanded={expanded} $variant={variant}>
                    <ChevronDownIcon aria-hidden />
                </IconContainer>
            )}
        </Selector>
    );
};

export const ExpandableElement = forwardRef(Component);
