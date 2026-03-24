import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "src/button";

import { Container } from "./doc-elements";
import { TokensTable } from "./tokens-table";

type Component = typeof Button;

const meta: Meta<Component> = {
    title: "Selection and input/Button/Base",
    component: Button,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button size="large">Large</Button>
                    <Button size="large" styleType="secondary">
                        Secondary
                    </Button>
                    <Button size="large" styleType="light">
                        Light
                    </Button>
                    <Button size="large" styleType="link">
                        Link
                    </Button>
                    <Button size="large" disabled>
                        Disabled
                    </Button>
                </Container>
                <Container>
                    <Button>Default</Button>
                    <Button styleType="secondary">Secondary</Button>
                    <Button styleType="light">Light</Button>
                    <Button styleType="link">Link</Button>
                    <Button disabled>Disabled</Button>
                </Container>
                <Container>
                    <Button size="small">Small</Button>
                    <Button size="small" styleType="secondary">
                        Secondary
                    </Button>
                    <Button size="small" styleType="light">
                        Light
                    </Button>
                    <Button size="small" styleType="link">
                        Link
                    </Button>
                    <Button size="small" disabled>
                        Disabled
                    </Button>
                </Container>
            </>
        );
    },
};

export const LoadingState: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button size="large" loading>
                        Large
                    </Button>
                    <Button size="large" styleType="secondary" loading>
                        Loading
                    </Button>
                    <Button size="large" styleType="light" loading>
                        Loading
                    </Button>
                    <Button size="large" styleType="link" loading>
                        Loading
                    </Button>
                    <Button size="large" disabled loading>
                        Loading
                    </Button>
                </Container>
                <Container>
                    <Button loading>Default</Button>
                    <Button styleType="secondary" loading>
                        Loading
                    </Button>
                    <Button styleType="light" loading>
                        Loading
                    </Button>
                    <Button styleType="link" loading>
                        Loading
                    </Button>
                    <Button disabled loading>
                        Loading
                    </Button>
                </Container>
                <Container>
                    <Button size="small" loading>
                        Small
                    </Button>
                    <Button size="small" styleType="secondary" loading>
                        Loading
                    </Button>
                    <Button size="small" styleType="light" loading>
                        Loading
                    </Button>
                    <Button size="small" styleType="link" loading>
                        Loading
                    </Button>
                    <Button size="small" disabled loading>
                        Loading
                    </Button>
                </Container>
            </>
        );
    },
};

export const Danger: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button size="large" danger>
                        Large
                    </Button>
                    <Button size="large" styleType="secondary" danger>
                        Secondary
                    </Button>
                    <Button size="large" styleType="light" danger>
                        Light
                    </Button>
                    <Button size="large" styleType="link" danger>
                        Link
                    </Button>
                </Container>
                <Container>
                    <Button danger>Default</Button>
                    <Button styleType="secondary" danger>
                        Secondary
                    </Button>
                    <Button styleType="light" danger>
                        Light
                    </Button>
                    <Button styleType="link" danger>
                        Link
                    </Button>
                </Container>
                <Container>
                    <Button size="small" danger>
                        Small
                    </Button>
                    <Button size="small" styleType="secondary" danger>
                        Secondary
                    </Button>
                    <Button size="small" styleType="light" danger>
                        Light
                    </Button>
                    <Button size="small" styleType="link" danger>
                        Link
                    </Button>
                </Container>
            </>
        );
    },
};

export const DangerLoadingState: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button size="large" loading danger>
                        Large
                    </Button>
                    <Button size="large" styleType="secondary" loading danger>
                        Loading
                    </Button>
                    <Button size="large" styleType="light" loading danger>
                        Loading
                    </Button>
                    <Button size="large" styleType="link" loading danger>
                        Loading
                    </Button>
                </Container>
                <Container>
                    <Button loading danger>
                        Default
                    </Button>
                    <Button styleType="secondary" loading danger>
                        Loading
                    </Button>
                    <Button styleType="light" loading danger>
                        Loading
                    </Button>
                    <Button styleType="link" loading danger>
                        Loading
                    </Button>
                </Container>
                <Container>
                    <Button size="small" loading danger>
                        Small
                    </Button>
                    <Button size="small" styleType="secondary" loading danger>
                        Loading
                    </Button>
                    <Button size="small" styleType="light" loading danger>
                        Loading
                    </Button>
                    <Button size="small" styleType="link" loading danger>
                        Loading
                    </Button>
                </Container>
            </>
        );
    },
};

export const FocusableWhenDisabled: StoryObj<Component> = {
    render: (_args) => (
        <Button
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
        >
            Add to cart
        </Button>
    ),
};

export const TokenCustomisation: StoryObj = {
    tags: ["!dev"],
    render: () => <TokensTable />,
};
