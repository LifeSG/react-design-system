import clsx from "clsx";
import React from "react";

import { Input } from "../input";
import { concatIds, VisuallyHidden } from "../shared/accessibility";
import { InputBox } from "../shared/input-wrapper";
import { useId } from "../util";
import * as styles from "./input-group.styles";
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
        <InputBox
            disabled={otherProps.disabled}
            error={error}
            readOnly={otherProps.readOnly}
            noBorder={noBorder}
            data-testid={otherProps["data-testid"]}
            className={clsx(
                styles.noAddonWrapper,
                otherProps.readOnly && styles.noAddonWrapperReadOnly,
                noBorder && styles.noAddonWrapperNoBorder,
                className
            )}
        >
            <Input
                ref={ref}
                {...otherProps}
                data-testid="input"
                styleType="no-border"
            />
        </InputBox>
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
                        <InputBox
                            error={error}
                            disabled={otherProps.disabled}
                            readOnly={otherProps.readOnly}
                            noBorder={noBorder}
                            data-testid={otherProps["data-testid"]}
                            className={clsx(
                                styles.addonWrapper,
                                otherProps.readOnly &&
                                    styles.addonWrapperReadOnly,
                                noBorder && styles.addonWrapperNoBorder,
                                position === "right" &&
                                    styles.addonWrapperPositionRight,
                                className
                            )}
                        >
                            <div
                                data-testid="addon"
                                id={addonId}
                                className={clsx(
                                    styles.labelAddonContainer,
                                    otherProps.disabled &&
                                        styles.labelAddonContainerDisabled,
                                    otherProps.readOnly &&
                                        (position === "right"
                                            ? styles.labelAddonContainerPositionRightReadOnly
                                            : styles.labelAddonContainerReadOnly),
                                    !otherProps.readOnly &&
                                        position === "right" &&
                                        styles.labelAddonContainerPositionRight,
                                    className
                                )}
                            >
                                {customAddon.children}
                            </div>
                            <VisuallyHidden aria-hidden id={ariaLabelId}>
                                {ariaLabel}
                            </VisuallyHidden>
                            <Input
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
                        </InputBox>
                    );
                } else {
                    return renderNoAddons();
                }
            }
            default: {
                const labelAddon = addon.attributes as LabelAddon;
                if (labelAddon.value) {
                    return (
                        <InputBox
                            disabled={otherProps.disabled}
                            error={error}
                            readOnly={otherProps.readOnly}
                            noBorder={noBorder}
                            data-testid={otherProps["data-testid"]}
                            className={clsx(
                                styles.addonWrapper,
                                otherProps.readOnly &&
                                    styles.addonWrapperReadOnly,
                                noBorder && styles.addonWrapperNoBorder,
                                position === "right" &&
                                    styles.addonWrapperPositionRight,
                                className
                            )}
                        >
                            <div
                                data-testid="addon"
                                id={addonId}
                                className={clsx(
                                    styles.labelAddonContainer,
                                    otherProps.disabled &&
                                        styles.labelAddonContainerDisabled,
                                    otherProps.readOnly &&
                                        (position === "right"
                                            ? styles.labelAddonContainerPositionRightReadOnly
                                            : styles.labelAddonContainerReadOnly),
                                    !otherProps.readOnly &&
                                        position === "right" &&
                                        styles.labelAddonContainerPositionRight,
                                    className
                                )}
                            >
                                {labelAddon.value}
                            </div>
                            <VisuallyHidden aria-hidden id={ariaLabelId}>
                                {ariaLabel}
                            </VisuallyHidden>
                            <Input
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
                        </InputBox>
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
