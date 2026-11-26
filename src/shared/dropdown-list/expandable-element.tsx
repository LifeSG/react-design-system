import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { AriaAttributes, Ref, forwardRef } from "react";
import {
    ComboboxButton,
    Content,
    IconContainer,
    Selector,
} from "./expandable-element.styles";
import { DropdownVariantType } from "./types";

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
    /** Applied to the visual selector that contains the combobox */
    className?: string | undefined;
    disabled: boolean | undefined;
    /**
     * Uses a min-height instead of a fixed height, so that `children` can
     * grow over multiple lines
     */
    dynamicHeight?: boolean | undefined;
    expanded: boolean | undefined;
    listboxId: string;
    popupRole: AriaAttributes["aria-haspopup"];
    readOnly: boolean | undefined;
    variant?: DropdownVariantType | undefined;
}

export const Component = (
    {
        children,
        content,
        className,
        disabled,
        dynamicHeight,
        expanded,
        listboxId,
        popupRole,
        readOnly,
        variant,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        ...otherProps
    }: ExpandableElementProps,
    ref: Ref<HTMLButtonElement>
) => {
    return (
        <Selector
            className={className}
            $variant={variant}
            $editable={!readOnly}
            $disabled={disabled}
            $dynamicHeight={dynamicHeight}
        >
            <ComboboxButton
                ref={ref}
                type="button"
                role="combobox"
                $overlay={!!content}
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
            </ComboboxButton>
            {content && <Content>{content}</Content>}
            {!readOnly && (
                <IconContainer $expanded={expanded} $variant={variant}>
                    <ChevronDownIcon aria-hidden />
                </IconContainer>
            )}
        </Selector>
    );
};

export const ExpandableElement = forwardRef(Component);
