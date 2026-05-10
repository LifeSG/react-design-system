import clsx from "clsx";
import React from "react";

import { concatIds, VisuallyHidden } from "../shared/accessibility";
import { useId } from "../util";
import {
    AddonWrapper,
    LabelAddonContainer,
    MainInput,
    NoAddonWrapper,
} from "./input-group.styles";
import { InputGroupListAddon } from "./input-group-list-addon";
import type {
    CustomAddon,
    InputGroupProps,
    LabelAddon,
    ListAddon,
} from "./types";

const Component = <T, V>(
    {
        addon,
        error,
        className,
        noBorder,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        ...otherProps
    }: InputGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const internalId = useId();
    const addonId = `${internalId}-addon`;
    const ariaLabelId = `${internalId}-ariaLabelId`;

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderNoAddons = () => (
        <NoAddonWrapper
            disabled={otherProps.disabled}
            error={error}
            readOnly={otherProps.readOnly}
            noBorder={noBorder}
            data-testid={otherProps["data-testid"]}
            className={clsx(
                otherProps.readOnly && "noAddonWrapperReadOnly",
                noBorder && "noAddonWrapperNoBorder",
                className
            )}
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
                            noBorder={noBorder}
                            aria-label={ariaLabel}
                            aria-labelledby={ariaLabelledBy}
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
                            error={error}
                            disabled={otherProps.disabled}
                            readOnly={otherProps.readOnly}
                            noBorder={noBorder}
                            data-testid={otherProps["data-testid"]}
                            className={clsx(
                                otherProps.readOnly && "addonWrapperReadOnly",
                                noBorder && "addonWrapperNoBorder",
                                position === "right" &&
                                    "addonWrapperPositionRight",
                                className
                            )}
                        >
                            <LabelAddonContainer
                                data-testid="addon"
                                id={addonId}
                                className={clsx(
                                    otherProps.disabled &&
                                        "labelAddonContainerDisabled",
                                    otherProps.readOnly &&
                                        "labelAddonContainerReadOnly",
                                    position === "right" &&
                                        "labelAddonContainerPositionRight",
                                    className
                                )}
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
                            disabled={otherProps.disabled}
                            error={error}
                            readOnly={otherProps.readOnly}
                            noBorder={noBorder}
                            data-testid={otherProps["data-testid"]}
                            className={clsx(
                                otherProps.readOnly && "addonWrapperReadOnly",
                                noBorder && "addonWrapperNoBorder",
                                position === "right" &&
                                    "addonWrapperPositionRight",
                                className
                            )}
                        >
                            <LabelAddonContainer
                                data-testid="addon"
                                id={addonId}
                                className={clsx(
                                    otherProps.disabled &&
                                        "labelAddonContainerDisabled",
                                    otherProps.readOnly &&
                                        "labelAddonContainerReadOnly",
                                    position === "right" &&
                                        "labelAddonContainerPositionRight"
                                )}
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
