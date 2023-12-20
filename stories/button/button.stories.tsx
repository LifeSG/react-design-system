import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/button";
import { Container } from "./doc-elements";

type Component = typeof Button.Default;

const meta: Meta<Component> = {
    title: "General/Button",
    component: Button.Default,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Container>
                    <Button.Default>Default</Button.Default>
                    <Button.Default styleType="secondary">
                        Secondary
                    </Button.Default>
                    <Button.Default styleType="light">Light</Button.Default>
                    <Button.Default styleType="link">Link</Button.Default>
                    <Button.Default disabled>Disabled</Button.Default>
                </Container>
                <Container>
                    <Button.Small>Small</Button.Small>
                    <Button.Small styleType="secondary">Secondary</Button.Small>
                    <Button.Small styleType="light">Light</Button.Small>
                    <Button.Small styleType="link">Link</Button.Small>
                    <Button.Small disabled>Disabled</Button.Small>
                </Container>
            </>
        );
    },
};

export const LoadingState: StoryObj<Component> = {
    render: () => {
        return (
            <>
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
                <Container>
                    <Button.Small loading>Small</Button.Small>
                    <Button.Small styleType="secondary" loading>
                        Loading
                    </Button.Small>
                    <Button.Small styleType="light" loading>
                        Loading
                    </Button.Small>
                    <Button.Small styleType="link" loading>
                        Loading
                    </Button.Small>
                    <Button.Small disabled loading>
                        Loading
                    </Button.Small>
                </Container>
            </>
        );
    },
};
