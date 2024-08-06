import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "src/tag";
import { v2_Text } from "src/v2_text";
import { StoryContainer } from "../storybook-common";
import { Grid, Row, Wrapper } from "./doc-elements";

type Component = typeof Tag;

const meta: Meta<Component> = {
    title: "Modules/Tag",
    component: Tag,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Tag type="outline" colorType="green">
                    Outline style tag
                </Tag>
                <Tag type="solid" colorType="red">
                    Solid style tag
                </Tag>
            </Wrapper>
        );
    },
};

export const Interactive: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Tag
                    type="outline"
                    interactive={true}
                    onClick={() => window.alert("Interactive tag clicked!")}
                >
                    Interactive tag
                </Tag>
                <Tag type="outline">Non interactive tag</Tag>
            </Wrapper>
        );
    },
};

export const WithIcon: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Tag
                    type="solid"
                    colorType="blue"
                    icon={<PlusCircleFillIcon />}
                    data-testid="first-example"
                    interactive={true}
                    onClick={() => window.alert("Interactive tag clicked!")}
                >
                    Some Label
                </Tag>
                <Tag
                    type="outline"
                    colorType="blue"
                    icon={<PlaceholderIcon />}
                    data-testid="second-example"
                >
                    Some Label
                </Tag>
            </Wrapper>
        );
    },
};

export const Variations: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Grid>
                    <Row>
                        <span />
                        <v2_Text.H6 weight="semibold">Black</v2_Text.H6>
                        <v2_Text.H6 weight="semibold">Grey</v2_Text.H6>
                        <v2_Text.H6 weight="semibold">Green</v2_Text.H6>
                        <v2_Text.H6 weight="semibold">Yellow</v2_Text.H6>
                        <v2_Text.H6 weight="semibold">Red</v2_Text.H6>
                        <v2_Text.H6 weight="semibold">Blue</v2_Text.H6>
                    </Row>
                    <Row>
                        <v2_Text.H6 weight="semibold">Outline</v2_Text.H6>
                        <Tag type="outline" colorType="black">
                            Label
                        </Tag>
                        <Tag type="outline" colorType="grey">
                            Label
                        </Tag>
                        <Tag type="outline" colorType="green">
                            Label
                        </Tag>
                        <Tag type="outline" colorType="yellow">
                            Label
                        </Tag>
                        <Tag type="outline" colorType="red">
                            Label
                        </Tag>
                        <Tag type="outline" colorType="blue">
                            Label
                        </Tag>
                    </Row>
                    <Row>
                        <v2_Text.H6 weight="semibold">Solid</v2_Text.H6>
                        <Tag type="solid" colorType="black">
                            Label
                        </Tag>
                        <Tag type="solid" colorType="grey">
                            Label
                        </Tag>
                        <Tag type="solid" colorType="green">
                            Label
                        </Tag>
                        <Tag type="solid" colorType="yellow">
                            Label
                        </Tag>
                        <Tag type="solid" colorType="red">
                            Label
                        </Tag>
                        <Tag type="solid" colorType="blue">
                            Label
                        </Tag>
                    </Row>
                </Grid>
            </StoryContainer>
        );
    },
};
