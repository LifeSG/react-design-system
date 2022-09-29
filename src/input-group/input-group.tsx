import React from "react";
import { AddOnContainer, Container, MainInput } from "./input-group.style";
import { InputGroupProps } from "./types";
import { InputGroupListAddon } from "./input-group-list-addon";

const Component = <T, V>(
    { addon, error, ...otherProps }: InputGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    const renderNoAddons = () => (
        <Container
            disabled={otherProps.disabled}
            $error={error}
            $readOnly={otherProps.type === "readonly"}
            data-testid={otherProps["data-testid"]}
        >
            <MainInput ref={ref} data-testid="input" {...otherProps} />
        </Container>
    );

    if (addon) {
        const { type = "label" } = addon;
        const position = addon.position || "left";
        switch (type) {
            case "list":
                if (addon.listItems && addon.listItems.length > 0) {
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
            case "custom":
                if (addon.children) {
                    return (
                        <Container
                            $error={error}
                            disabled={otherProps.disabled}
                            $readOnly={otherProps.type === "readonly"}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                        >
                            <AddOnContainer
                                data-testid="addon"
                                disabled={otherProps.disabled}
                            >
                                {addon.children}
                            </AddOnContainer>
                            <MainInput
                                {...otherProps}
                                $position={position}
                                data-testid="input"
                            />
                        </Container>
                    );
                } else {
                    return renderNoAddons();
                }
            default:
                if (addon.value) {
                    return (
                        <Container
                            disabled={otherProps.disabled}
                            $error={error}
                            $readOnly={otherProps.type === "readonly"}
                            data-testid={otherProps["data-testid"]}
                            $position={position}
                        >
                            <AddOnContainer
                                data-testid="addon"
                                disabled={otherProps.disabled}
                            >
                                {addon.value}
                            </AddOnContainer>
                            <MainInput
                                {...otherProps}
                                $position={position}
                                data-testid="input"
                            />
                        </Container>
                    );
                } else {
                    return renderNoAddons();
                }
        }
    } else {
        return renderNoAddons();
    }
};

export const InputGroup = React.forwardRef(Component);
