import React from "react";
import { AddOnContainer, Container, MainInput } from "./input-group.style";
import { CustomAddon, InputGroupProps, LabelAddon, ListAddon } from "./types";
import { InputGroupListAddon } from "./input-group-list-addon";

const Component = <T, V>(
    { addon, error, ...otherProps }: InputGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    const renderNoAddons = () => (
        <Container
            disabled={otherProps.disabled}
            $error={error}
            $readOnly={otherProps.readOnly}
            data-testid={otherProps["data-testid"]}
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
                            addon={addon}
                            error={error}
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
                        <Container
                            $error={error}
                            disabled={otherProps.disabled}
                            $readOnly={otherProps.readOnly}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                        >
                            <AddOnContainer
                                data-testid="addon"
                                disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                            >
                                {customAddon.children}
                            </AddOnContainer>
                            <MainInput
                                {...otherProps}
                                allowClear={allowClear && position !== "right"}
                                error={error}
                                $position={position}
                                data-testid="input"
                            />
                        </Container>
                    );
                } else {
                    return renderNoAddons();
                }
            }
            default: {
                const labelAddon = addon.attributes as LabelAddon;
                if (labelAddon.value) {
                    return (
                        <Container
                            disabled={otherProps.disabled}
                            $error={error}
                            $readOnly={otherProps.readOnly}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                        >
                            <AddOnContainer
                                data-testid="addon"
                                disabled={otherProps.disabled}
                                $readOnly={otherProps.readOnly}
                            >
                                {labelAddon.value}
                            </AddOnContainer>
                            <MainInput
                                {...otherProps}
                                allowClear={allowClear && position !== "right"}
                                error={error}
                                $position={position}
                                data-testid="input"
                            />
                        </Container>
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
