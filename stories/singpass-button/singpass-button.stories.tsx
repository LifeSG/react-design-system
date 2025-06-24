import type { Meta, StoryObj } from "@storybook/react";
import { SingpassButton } from "src/singpass-button";
import { Container } from "./doc-elements";
import { TokensTable } from "./tokens-table";

type Component = typeof SingpassButton.Default;

const meta: Meta<Component> = {
    title: "Selection and input/SingpassButton",
    component: SingpassButton.Default,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <SingpassButton.Large styleType="white-filled" />
                    <SingpassButton.Large styleType="red-filled" />
                </Container>
                <Container>
                    <SingpassButton.Default styleType="white-filled" />
                    <SingpassButton.Default styleType="red-filled" />
                </Container>
                <Container>
                    <SingpassButton.Small styleType="white-filled" />
                    <SingpassButton.Small styleType="red-filled" />
                </Container>
            </>
        );
    },
};

export const TokenCustomisation: StoryObj = {
    tags: ["!dev"],
    render: () => <TokensTable />,
};
