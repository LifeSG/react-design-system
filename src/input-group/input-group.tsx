import React from "react";
import { InputGroupListAddon } from "./input-group-list-addon";
import {
    AddonWrapper,
    LabelAddonContainer,
    MainInput,
    NoAddonWrapper,
} from "./input-group.style";
import { CustomAddon, InputGroupProps, LabelAddon, ListAddon } from "./types";

const Component = <T, V>(
    { addon, error, className, ...otherProps }: InputGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    const renderNoAddons = () => (
        <NoAddonWrapper
            $disabled={otherProps.disabled}
            $error={error}
            $readOnly={otherProps.readOnly}
            data-testid={otherProps["data-testid"]}
            className={className}
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
                        >
                            <LabelAddonContainer
                                data-testid="addon"
                                $disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                                $position={position}
                            >
                                {customAddon.children}
                            </LabelAddonContainer>
                            <MainInput
                                ref={ref}
                                {...otherProps}
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
                        >
                            <LabelAddonContainer
                                data-testid="addon"
                                $disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                                $position={position}
                            >
                                {labelAddon.value}
                            </LabelAddonContainer>
                            <MainInput
                                ref={ref}
                                {...otherProps}
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
