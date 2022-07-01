import React from "react";
import { AddOnContainer, Container, MainInput } from "./input-group.style";
import { InputGroupProps } from "./types";
import { InputGroupListAddon } from "./input-group-list-addon";

const Component = <T,>(
    props: InputGroupProps<T>,
    ref: React.Ref<HTMLInputElement>
) => {
    const { addon, error, ...otherProps } = props;

    const renderNoAddons = () => (
        <Container
            disabled={otherProps.disabled}
            error={error}
            data-testid={otherProps["data-testid"]}
        >
            <MainInput ref={ref} data-testid="input" {...otherProps} />
        </Container>
    );

    if (addon) {
        const { type = "label" } = addon;

        switch (type) {
            case "list":
                if (addon.listItems && addon.listItems.length > 0) {
                    return <InputGroupListAddon {...props} />;
                } else {
                    return renderNoAddons();
                }
            case "custom":
                if (addon.children) {
                    return (
                        <Container
                            error={error}
                            disabled={otherProps.disabled}
                            data-testid={otherProps["data-testid"]}
                        >
                            <AddOnContainer
                                data-testid="addon"
                                disabled={otherProps.disabled}
                            >
                                {addon.children}
                            </AddOnContainer>
                            <MainInput
                                {...otherProps}
                                hasAddon={true}
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
                            error={error}
                            data-testid={otherProps["data-testid"]}
                        >
                            {addon && (
                                <AddOnContainer
                                    data-testid="addon"
                                    disabled={otherProps.disabled}
                                >
                                    {addon.value}
                                </AddOnContainer>
                            )}
                            <MainInput
                                {...otherProps}
                                hasAddon={true}
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
