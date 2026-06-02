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
            className={clsx(styles.noAddonWrapper, className)}
            data-read-only={otherProps.readOnly}
            data-no-border={noBorder}
        >
            <VisuallyHidden aria-hidden id={ariaLabelId}>
                {ariaLabel}
            </VisuallyHidden>
            <Input
                ref={ref}
                {...otherProps}
                data-testid="input"
                styleType="no-border"
                aria-labelledby={concatIds(ariaLabelId, ariaLabelledBy)}
            />
        </InputBox>
    );

    const renderWithAddon = (
        addonContent: React.ReactNode,
        position: "left" | "right",
        allowClear?: boolean
    ) => (
        <InputBox
            disabled={otherProps.disabled}
            error={error}
            readOnly={otherProps.readOnly}
            noBorder={noBorder}
            data-testid={otherProps["data-testid"]}
            className={clsx(styles.addonWrapper, className)}
            data-read-only={otherProps.readOnly}
            data-no-border={noBorder}
            data-position={position}
        >
            <div
                data-testid="addon"
                id={addonId}
                className={styles.labelAddonContainer}
                data-disabled={otherProps.disabled}
                data-read-only={otherProps.readOnly}
                data-position={position}
            >
                {addonContent}
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
                    return renderWithAddon(
                        customAddon.children,
                        position,
                        allowClear
                    );
                } else {
                    return renderNoAddons();
                }
            }
            default: {
                const labelAddon = addon.attributes as LabelAddon;
                if (labelAddon.value) {
                    return renderWithAddon(
                        labelAddon.value,
                        position,
                        allowClear
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
