import type { Meta, StoryObj } from "@storybook/react";
import { ButtonWithIcon } from "../../src/button-with-icon";
import { Container } from "../button/doc-elements";
import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";

type Component = typeof ButtonWithIcon.Default;

const meta: Meta<Component> = {
    title: "Selection and input/Button/With Icon",
    component: ButtonWithIcon.Default,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
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
    render: () => {
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
    render: () => {
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
