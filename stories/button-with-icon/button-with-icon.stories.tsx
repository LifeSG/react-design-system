import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonWithIcon } from "src/button-with-icon";
import { Container } from "../button/doc-elements";

type Component = typeof ButtonWithIcon.Default;

const meta: Meta<Component> = {
    title: "Selection and input/Button/With Icon",
    component: ButtonWithIcon.Default,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <ButtonWithIcon.Default icon={<PlaceholderIcon />}>
                        Default
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                    >
                        Secondary
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="light"
                    >
                        Light
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="link"
                    >
                        Link
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default icon={<PlaceholderIcon />} disabled>
                        Disabled
                    </ButtonWithIcon.Default>
                </Container>
                <Container>
                    <ButtonWithIcon.Small icon={<PlaceholderIcon />}>
                        Small
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                    >
                        Secondary
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="light"
                    >
                        Light
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="link"
                    >
                        Link
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small icon={<PlaceholderIcon />} disabled>
                        Disabled
                    </ButtonWithIcon.Small>
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
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        iconPosition="right"
                    >
                        Default
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        iconPosition="right"
                    >
                        Secondary
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        iconPosition="right"
                    >
                        Light
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="link"
                        iconPosition="right"
                    >
                        Link
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        iconPosition="right"
                        disabled
                    >
                        Disabled
                    </ButtonWithIcon.Default>
                </Container>
                <Container>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        iconPosition="right"
                    >
                        Small
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        iconPosition="right"
                    >
                        Secondary
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        iconPosition="right"
                    >
                        Light
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="link"
                        iconPosition="right"
                    >
                        Link
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        iconPosition="right"
                        disabled
                    >
                        Disabled
                    </ButtonWithIcon.Small>
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
                    <ButtonWithIcon.Default icon={<PlaceholderIcon />} danger>
                        Default
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        danger
                    >
                        Secondary
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        danger
                    >
                        Light
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="link"
                        danger
                    >
                        Link
                    </ButtonWithIcon.Default>
                </Container>
                <Container>
                    <ButtonWithIcon.Small icon={<PlaceholderIcon />} danger>
                        Small
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        danger
                    >
                        Secondary
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        danger
                    >
                        Light
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="link"
                        danger
                    >
                        Link
                    </ButtonWithIcon.Small>
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
                    <ButtonWithIcon.Default icon={<PlaceholderIcon />} loading>
                        Default
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        styleType="link"
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Default>
                    <ButtonWithIcon.Default
                        icon={<PlaceholderIcon />}
                        disabled
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Default>
                </Container>
                <Container>
                    <ButtonWithIcon.Small icon={<PlaceholderIcon />} loading>
                        Small
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="secondary"
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="light"
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        styleType="link"
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Small>
                    <ButtonWithIcon.Small
                        icon={<PlaceholderIcon />}
                        disabled
                        loading
                    >
                        Loading
                    </ButtonWithIcon.Small>
                </Container>
            </>
        );
    },
};

export const FocusableWhenDisabled: StoryObj<Component> = {
    render: (_args) => (
        <ButtonWithIcon.Default
            icon={<PlaceholderIcon />}
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
        >
            Add to cart
        </ButtonWithIcon.Default>
    ),
};
