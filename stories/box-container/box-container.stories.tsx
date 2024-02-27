import type { Meta, StoryObj } from "@storybook/react";
import { BoxContainer } from "src/box-container";
import { Button } from "src/button";
import { Text } from "src/text";

type Component = typeof BoxContainer;

const meta: Meta<Component> = {
    title: "Modules/BoxContainer",
    component: BoxContainer,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <BoxContainer title="This is the title">
                <div style={{ padding: "2rem" }}>
                    <Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text.Body>
                </div>
            </BoxContainer>
        );
    },
};

export const NonCollapsible: StoryObj<Component> = {
    name: "Non-collapsible",
    render: () => {
        return (
            <BoxContainer title="This is not collapsible" collapsible={false}>
                <div style={{ padding: "2rem" }}>
                    <Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text.Body>
                </div>
            </BoxContainer>
        );
    },
};

export const WithDisplayState: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <BoxContainer title="Error icon" displayState="error">
                    <div style={{ padding: "2rem" }}>
                        <Text.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text.Body>
                    </div>
                </BoxContainer>
                <BoxContainer
                    title="This comes with a warning icon"
                    displayState="warning"
                >
                    <div style={{ padding: "2rem" }}>
                        <Text.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text.Body>
                    </div>
                </BoxContainer>
            </>
        );
    },
};

export const WithCustomCallToAction: StoryObj<Component> = {
    render: () => {
        return (
            <BoxContainer
                title="This has a call to action button"
                expanded={true}
                callToActionComponent={
                    <Button.Default styleType="light">Edit</Button.Default>
                }
            >
                <div style={{ padding: "2rem" }}>
                    <Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text.Body>
                </div>
            </BoxContainer>
        );
    },
};
