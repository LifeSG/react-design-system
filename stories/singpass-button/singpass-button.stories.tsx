import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { SingpassButton } from "src/singpass-button";

import { Container } from "./doc-elements";
import { TokensTable } from "./tokens-table";

type Component = typeof SingpassButton;

const meta: Meta<Component> = {
    title: "Selection and input/SingpassButton",
    component: SingpassButton,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <SingpassButton sizeType="large" styleType="white-filled" />
                    <SingpassButton sizeType="large" styleType="red-filled" />
                </Container>
                <Container>
                    <SingpassButton styleType="white-filled" />
                    <SingpassButton styleType="red-filled" />
                </Container>
                <Container>
                    <SingpassButton sizeType="small" styleType="white-filled" />
                    <SingpassButton sizeType="small" styleType="red-filled" />
                </Container>
            </>
        );
    },
};

export const TokenCustomisation: StoryObj = {
    tags: ["!dev"],
    render: () => <TokensTable />,
};
