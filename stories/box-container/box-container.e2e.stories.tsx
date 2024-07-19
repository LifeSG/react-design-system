import type { Meta, StoryObj } from "@storybook/react";
import { BoxContainer } from "src/box-container";
import { Button } from "src/button";
import { Text } from "src/text";

type Component = typeof BoxContainer;

const meta: Meta<Component> = {
    title: "e2e-BoxContainer",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div style={{ margin: "1rem", width: "500px", maxWidth: "90vw" }}>
                <Story />
            </div>
        ),
    ],
    tags: ["e2e"],
};

export default meta;

const TITLE_SHORT = "Odio";
const TITLE_LONG = "Odio facilisis mauris sit amet massa vitae tortor";
const BODY_SHORT = "Lorem ipsum";
const BODY_LONG =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const Collapsible: StoryObj<Component> = {
    render: () => {
        return (
            <BoxContainer data-testid="e2e" title={TITLE_LONG}>
                <Text.Body>{BODY_LONG}</Text.Body>
            </BoxContainer>
        );
    },
};

export const Uncollapsible: StoryObj<Component> = {
    render: () => {
        return (
            <BoxContainer
                data-testid="e2e"
                title={TITLE_LONG}
                collapsible={false}
            >
                <Text.Body>{BODY_LONG}</Text.Body>
            </BoxContainer>
        );
    },
};

export const WithIcon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_LONG}
                    collapsible={false}
                    displayState="warning"
                >
                    <Text.Body>{BODY_LONG}</Text.Body>
                </BoxContainer>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_SHORT}
                    displayState="warning"
                >
                    <Text.Body>{BODY_SHORT}</Text.Body>
                </BoxContainer>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_LONG}
                    displayState="warning"
                >
                    <Text.Body>{BODY_LONG}</Text.Body>
                </BoxContainer>
            </>
        );
    },
};

export const WithActionButton: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_LONG}
                    callToActionComponent={
                        <Button.Default>Edit</Button.Default>
                    }
                    collapsible={false}
                >
                    <Text.Body>{BODY_LONG}</Text.Body>
                </BoxContainer>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_SHORT}
                    callToActionComponent={
                        <Button.Default>Edit</Button.Default>
                    }
                >
                    <Text.Body>{BODY_SHORT}</Text.Body>
                </BoxContainer>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_LONG}
                    callToActionComponent={
                        <Button.Default>Edit</Button.Default>
                    }
                >
                    <Text.Body>{BODY_LONG}</Text.Body>
                </BoxContainer>
            </>
        );
    },
};

export const WithIconAndActionButton: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_SHORT}
                    callToActionComponent={
                        <Button.Default>Edit</Button.Default>
                    }
                    displayState="warning"
                >
                    <Text.Body>{BODY_SHORT}</Text.Body>
                </BoxContainer>
                <BoxContainer
                    data-testid="e2e"
                    title={TITLE_LONG}
                    callToActionComponent={
                        <Button.Default>Edit</Button.Default>
                    }
                    displayState="warning"
                >
                    <Text.Body>{BODY_LONG}</Text.Body>
                </BoxContainer>
            </>
        );
    },
};
