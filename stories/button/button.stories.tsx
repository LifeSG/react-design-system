import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/button";
import { Container } from "./doc-elements";

type Component = typeof Button;

const meta: Meta<Component> = {
    title: "General/Button",
    component: Button,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Container>
                <Button.Default>Default</Button.Default>
                <Button.Default styleType="secondary">Secondary</Button.Default>
                <Button.Default styleType="light">Light</Button.Default>
                <Button.Default styleType="link">Link</Button.Default>
                <Button.Default disabled>Disabled</Button.Default>
            </Container>
        );
    },
};

export const LoadingState: StoryObj<Component> = {
    render: () => {
        return (
            <Container>
                <Button.Default loading>Loading</Button.Default>
                <Button.Default styleType="secondary" loading>
                    Loading
                </Button.Default>
                <Button.Default styleType="light" loading>
                    Loading
                </Button.Default>
                <Button.Default styleType="link" loading>
                    Loading
                </Button.Default>
                <Button.Default disabled loading>
                    Loading
                </Button.Default>
            </Container>
        );
    },
};
