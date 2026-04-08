import React, { useState } from "react";
import { InputGroupListAddon } from "./input-group-list-addon";
import {
    AddonWrapper,
    LabelAddonContainer,
    MainInput,
    NoAddonWrapper,
} from "./input-group.style";
import { CustomAddon, InputGroupProps, LabelAddon, ListAddon } from "./types";
import { VisuallyHidden, concatIds } from "../shared/accessibility";
import { SimpleIdGenerator } from "../util";

const Component = <T, V>(
    {
        addon,
        error,
        className,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        ...otherProps
    }: InputGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const addonId = `${internalId}-addon`;
    const ariaLabelId = `${internalId}-ariaLabelId`;

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderNoAddons = () => (
        <NoAddonWrapper
            $disabled={otherProps.disabled}
            $error={error}
            $readOnly={otherProps.readOnly}
            data-testid={otherProps["data-testid"]}
            className={className}
            $noBorder={otherProps.noBorder}
        >
            <MainInput
                ref={ref}
                {...otherProps}
                data-testid="input"
                styleType="no-border"
            />
        </NoAddonWrapper>
    );

    if (addon) {
        const { type = "label", position = "left" } = addon;
        const { allowClear } = otherProps;

        switch (type) {
            case "list": {
                const listAddon = addon.attributes as ListAddon<T, V>;
                if (listAddon.options && listAddon.options.length > 0) {
                    return (
                        <InputGroupListAddon
                            ref={ref}
                            addon={addon}
                            error={error}
                            className={className}
                            noBorder={otherProps.noBorder}
                            {...otherProps}
                        />
                    );
                } else {
                    return renderNoAddons();
                }
            }

            case "custom": {
                const customAddon = addon.attributes as CustomAddon;
                if (customAddon.children) {
                    return (
                        <AddonWrapper
                            $error={error}
                            $disabled={otherProps.disabled}
                            $readOnly={otherProps.readOnly}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                            className={className}
                            $noBorder={otherProps.noBorder}
                        >
                            <LabelAddonContainer
                                data-testid="addon"
                                id={addonId}
                                $disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                                $position={position}
                            >
                                {customAddon.children}
                            </LabelAddonContainer>
                            <VisuallyHidden aria-hidden id={ariaLabelId}>
                                {ariaLabel}
                            </VisuallyHidden>
                            <MainInput
                                ref={ref}
                                {...otherProps}
                                aria-labelledby={concatIds(
                                    ariaLabelId,
                                    ariaLabelledBy,
                                    addonId
                                )}
                                allowClear={allowClear && position !== "right"}
                                error={error}
                                data-testid="input"
                                styleType="no-border"
                            />
                        </AddonWrapper>
                    );
                } else {
                    return renderNoAddons();
                }
            }
            default: {
                const labelAddon = addon.attributes as LabelAddon;
                if (labelAddon.value) {
                    return (
                        <AddonWrapper
                            $disabled={otherProps.disabled}
                            $error={error}
                            $readOnly={otherProps.readOnly}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                            className={className}
                            $noBorder={otherProps.noBorder}
                        >
                            <LabelAddonContainer
                                data-testid="addon"
                                id={addonId}
                                $disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                                $position={position}
                            >
                                {labelAddon.value}
                            </LabelAddonContainer>
                            <VisuallyHidden aria-hidden id={ariaLabelId}>
                                {ariaLabel}
                            </VisuallyHidden>
                            <MainInput
                                ref={ref}
                                {...otherProps}
                                aria-labelledby={concatIds(
                                    ariaLabelId,
                                    ariaLabelledBy,
                                    addonId
                                )}
                                allowClear={allowClear && position !== "right"}
                                error={error}
                                data-testid="input"
                                styleType="no-border"
                            />
                        </AddonWrapper>
                    );
                } else {
                    return renderNoAddons();
                }
            }
        }
    } else {
        return renderNoAddons();
    }
};

export const InputGroup = React.forwardRef(Component);
