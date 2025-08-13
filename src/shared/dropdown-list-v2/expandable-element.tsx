import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { AriaAttributes, Ref, forwardRef } from "react";
import { IconContainer, Selector } from "./expandable-element.styles";
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

export const Component = (
    {
        children,
        disabled,
        expanded,
        listboxId,
        popupRole,
        readOnly,
        variant,
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
            aria-expanded={expanded}
            aria-haspopup={popupRole}
            data-testid="selector"
            disabled={disabled}
            aria-controls={listboxId}
            $variant={variant}
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
