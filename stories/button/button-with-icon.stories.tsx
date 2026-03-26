import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "src/button";

import { Container } from "./doc-elements";

type Component = typeof Button;

const meta: Meta<Component> = {
    title: "Selection and input/Button/With Icon",
    component: Button,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button icon={<PlaceholderIcon />}>Default</Button>
                    <Button icon={<PlaceholderIcon />} styleType="secondary">
                        Secondary
                    </Button>
                    <Button icon={<PlaceholderIcon />} styleType="light">
                        Light
                    </Button>
                    <Button icon={<PlaceholderIcon />} styleType="link">
                        Link
                    </Button>
                    <Button icon={<PlaceholderIcon />} disabled>
                        Disabled
                    </Button>
                </Container>
                <Container>
                    <Button icon={<PlaceholderIcon />} sizeType="small">
                        Small
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="secondary"
                    >
                        Secondary
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="light"
                    >
                        Light
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="link"
                    >
                        Link
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        disabled
                    >
                        Disabled
                    </Button>
                </Container>
            </>
        );
    },
};

export const RightPositioned: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button icon={<PlaceholderIcon />} iconPosition="right">
                        Default
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        iconPosition="right"
                    >
                        Secondary
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        iconPosition="right"
                    >
                        Light
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        styleType="link"
                        iconPosition="right"
                    >
                        Link
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        iconPosition="right"
                        disabled
                    >
                        Disabled
                    </Button>
                </Container>
                <Container>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        iconPosition="right"
                    >
                        Small
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="secondary"
                        iconPosition="right"
                    >
                        Secondary
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="light"
                        iconPosition="right"
                    >
                        Light
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="link"
                        iconPosition="right"
                    >
                        Link
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        iconPosition="right"
                        disabled
                    >
                        Disabled
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
                    <Button icon={<PlaceholderIcon />} danger>
                        Default
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        danger
                    >
                        Secondary
                    </Button>
                    <Button icon={<PlaceholderIcon />} styleType="light" danger>
                        Light
                    </Button>
                    <Button icon={<PlaceholderIcon />} styleType="link" danger>
                        Link
                    </Button>
                </Container>
                <Container>
                    <Button icon={<PlaceholderIcon />} sizeType="small" danger>
                        Small
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="secondary"
                        danger
                    >
                        Secondary
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="light"
                        danger
                    >
                        Light
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="link"
                        danger
                    >
                        Link
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
                    <Button icon={<PlaceholderIcon />} loading>
                        Default
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        loading
                    >
                        Loading
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        loading
                    >
                        Loading
                    </Button>
                    <Button icon={<PlaceholderIcon />} styleType="link" loading>
                        Loading
                    </Button>
                    <Button icon={<PlaceholderIcon />} disabled loading>
                        Loading
                    </Button>
                </Container>
                <Container>
                    <Button icon={<PlaceholderIcon />} sizeType="small" loading>
                        Small
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="secondary"
                        loading
                    >
                        Loading
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="light"
                        loading
                    >
                        Loading
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        styleType="link"
                        loading
                    >
                        Loading
                    </Button>
                    <Button
                        icon={<PlaceholderIcon />}
                        sizeType="small"
                        disabled
                        loading
                    >
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
            icon={<PlaceholderIcon />}
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
        >
            Add to cart
        </Button>
    ),
};
