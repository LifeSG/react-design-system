import React from "react";
import { AddOnContainer, Container, MainInput } from "./input-group.style";
import { CustomAddon, InputGroupProps, LabelAddon, ListAddon } from "./types";
import { InputGroupListAddon } from "./input-group-list-addon";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";

const Component = <T, V>(
    { addon, error, className, ...otherProps }: InputGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    const renderNoAddons = () => (
        <Container
            disabled={otherProps.disabled}
            $error={error}
            $readOnly={otherProps.readOnly}
            data-testid={otherProps["data-testid"]}
            className={className}
        >
            <MainInput ref={ref} {...otherProps} data-testid="input" />
        </Container>
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
                        <InputWrapper
                            $error={error}
                            $disabled={otherProps.disabled}
                            $readOnly={otherProps.readOnly}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                            className={className}
                        >
                            <AddOnContainer
                                data-testid="addon"
                                disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                                $position={position}
                            >
                                {customAddon.children}
                            </AddOnContainer>
                            <MainInput
                                ref={ref}
                                {...otherProps}
                                allowClear={allowClear && position !== "right"}
                                error={error}
                                data-testid="input"
                            />
                        </InputWrapper>
                    );
                } else {
                    return renderNoAddons();
                }
            }
            default: {
                const labelAddon = addon.attributes as LabelAddon;
                if (labelAddon.value) {
                    return (
                        <InputWrapper
                            $disabled={otherProps.disabled}
                            $error={error}
                            $readOnly={otherProps.readOnly}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                            className={className}
                        >
                            <AddOnContainer
                                data-testid="addon"
                                disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                                $position={position}
                            >
                                {labelAddon.value}
                            </AddOnContainer>
                            <MainInput
                                ref={ref}
                                {...otherProps}
                                allowClear={allowClear && position !== "right"}
                                error={error}
                                data-testid="input"
                            />
                        </InputWrapper>
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
