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
                    <Button sizeType="large">Large</Button>
                    <Button sizeType="large" styleType="secondary">
                        Secondary
                    </Button>
                    <Button sizeType="large" styleType="light">
                        Light
                    </Button>
                    <Button sizeType="large" styleType="link">
                        Link
                    </Button>
                    <Button sizeType="large" disabled>
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
                    <Button sizeType="small">Small</Button>
                    <Button sizeType="small" styleType="secondary">
                        Secondary
                    </Button>
                    <Button sizeType="small" styleType="light">
                        Light
                    </Button>
                    <Button sizeType="small" styleType="link">
                        Link
                    </Button>
                    <Button sizeType="small" disabled>
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
                    <Button sizeType="large" loading>
                        Large
                    </Button>
                    <Button sizeType="large" styleType="secondary" loading>
                        Loading
                    </Button>
                    <Button sizeType="large" styleType="light" loading>
                        Loading
                    </Button>
                    <Button sizeType="large" styleType="link" loading>
                        Loading
                    </Button>
                    <Button sizeType="large" disabled loading>
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
                    <Button sizeType="small" loading>
                        Small
                    </Button>
                    <Button sizeType="small" styleType="secondary" loading>
                        Loading
                    </Button>
                    <Button sizeType="small" styleType="light" loading>
                        Loading
                    </Button>
                    <Button sizeType="small" styleType="link" loading>
                        Loading
                    </Button>
                    <Button sizeType="small" disabled loading>
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
                    <Button sizeType="large" danger>
                        Large
                    </Button>
                    <Button sizeType="large" styleType="secondary" danger>
                        Secondary
                    </Button>
                    <Button sizeType="large" styleType="light" danger>
                        Light
                    </Button>
                    <Button sizeType="large" styleType="link" danger>
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
                    <Button sizeType="small" danger>
                        Small
                    </Button>
                    <Button sizeType="small" styleType="secondary" danger>
                        Secondary
                    </Button>
                    <Button sizeType="small" styleType="light" danger>
                        Light
                    </Button>
                    <Button sizeType="small" styleType="link" danger>
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
                    <Button sizeType="large" loading danger>
                        Large
                    </Button>
                    <Button
                        sizeType="large"
                        styleType="secondary"
                        loading
                        danger
                    >
                        Loading
                    </Button>
                    <Button sizeType="large" styleType="light" loading danger>
                        Loading
                    </Button>
                    <Button sizeType="large" styleType="link" loading danger>
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
                    <Button sizeType="small" loading danger>
                        Small
                    </Button>
                    <Button
                        sizeType="small"
                        styleType="secondary"
                        loading
                        danger
                    >
                        Loading
                    </Button>
                    <Button sizeType="small" styleType="light" loading danger>
                        Loading
                    </Button>
                    <Button sizeType="small" styleType="link" loading danger>
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
