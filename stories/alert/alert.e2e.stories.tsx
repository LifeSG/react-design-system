import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "src/alert";

type Component = typeof Alert;

const meta: Meta<Component> = {
    title: "e2e-Alert",
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

const BODY =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies placerat tortor, at mattis ex congue sollicitudin.";

export const WithoutIcon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert data-testid="e2e" type="error">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="warning">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="success">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="info">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="description">
                    {BODY}
                </Alert>
            </>
        );
    },
};

export const WithoutIconSmall: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert data-testid="e2e" type="error" sizeType="small">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="warning" sizeType="small">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="success" sizeType="small">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="info" sizeType="small">
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="description" sizeType="small">
                    {BODY}
                </Alert>
            </>
        );
    },
};

export const WithIcon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert data-testid="e2e" type="error" showIcon>
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="warning" showIcon>
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="success" showIcon>
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="info" showIcon>
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="description" showIcon>
                    {BODY}
                </Alert>
            </>
        );
    },
};

export const WithIconSmall: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert data-testid="e2e" type="error" showIcon sizeType="small">
                    {BODY}
                </Alert>
                <Alert
                    data-testid="e2e"
                    type="warning"
                    showIcon
                    sizeType="small"
                >
                    {BODY}
                </Alert>
                <Alert
                    data-testid="e2e"
                    type="success"
                    showIcon
                    sizeType="small"
                >
                    {BODY}
                </Alert>
                <Alert data-testid="e2e" type="info" showIcon sizeType="small">
                    {BODY}
                </Alert>
                <Alert
                    data-testid="e2e"
                    type="description"
                    showIcon
                    sizeType="small"
                >
                    {BODY}
                </Alert>
            </>
        );
    },
};

export const WithLink: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert
                    data-testid="e2e"
                    type="warning"
                    showIcon
                    actionLink={{ children: "Hyperlink" }}
                >
                    {BODY}
                </Alert>
                <br />
                <Alert
                    data-testid="e2e-small"
                    type="warning"
                    showIcon
                    actionLink={{ children: "Hyperlink" }}
                    sizeType="small"
                >
                    {BODY}
                </Alert>
            </>
        );
    },
};

export const WithMaxCollapsedHeight: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert
                    data-testid="e2e"
                    type="warning"
                    showIcon
                    maxCollapsedHeight={50}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error doloribus porro dolore dolor nulla est. Deleniti quasi
                    consequuntur magni, maxime, fuga molestias vero adipisci
                    quibusdam facere quisquam blanditiis? Corrupti, mollitia?
                </Alert>
                <br />
                <Alert
                    data-testid="e2e-small"
                    type="warning"
                    showIcon
                    maxCollapsedHeight={50}
                    sizeType="small"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error doloribus porro dolore dolor nulla est. Deleniti quasi
                    consequuntur magni, maxime, fuga molestias vero adipisci
                    quibusdam facere quisquam blanditiis? Corrupti, mollitia?
                </Alert>
            </>
        );
    },
};
