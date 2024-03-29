import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "src/pill";
import { Text } from "src/text";
import { StoryContainer } from "../storybook-common";
import { Grid, Row, Wrapper } from "./doc-elements";

type Component = typeof Pill;

const meta: Meta<Component> = {
    title: "Modules/Pill",
    component: Pill,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Pill type="outline" colorType="blue">
                    Outline style pill
                </Pill>
                <Pill type="solid" colorType="red">
                    Solid style pill
                </Pill>
            </Wrapper>
        );
    },
};

export const WithIcon: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Pill
                    type="outline"
                    icon={<PlusCircleFillIcon />}
                    data-testid="first-example"
                >
                    Status Label
                </Pill>
                <Pill
                    type="solid"
                    colorType="blue"
                    icon={<PlaceholderIcon />}
                    data-testid="second-example"
                >
                    Status Label
                </Pill>
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
                        <Text.H6 weight="semibold">Black</Text.H6>
                        <Text.H6 weight="semibold">Grey</Text.H6>
                        <Text.H6 weight="semibold">Green</Text.H6>
                        <Text.H6 weight="semibold">Yellow</Text.H6>
                        <Text.H6 weight="semibold">Red</Text.H6>
                        <Text.H6 weight="semibold">Blue</Text.H6>
                    </Row>
                    <Row>
                        <Text.H6 weight="semibold">Outline</Text.H6>
                        <Pill type="outline" colorType="black">
                            Label
                        </Pill>
                        <Pill type="outline" colorType="grey">
                            Label
                        </Pill>
                        <Pill type="outline" colorType="green">
                            Label
                        </Pill>
                        <Pill type="outline" colorType="yellow">
                            Label
                        </Pill>
                        <Pill type="outline" colorType="red">
                            Label
                        </Pill>
                        <Pill type="outline" colorType="blue">
                            Label
                        </Pill>
                    </Row>
                    <Row>
                        <Text.H6 weight="semibold">Solid</Text.H6>
                        <Pill type="solid" colorType="black">
                            Label
                        </Pill>
                        <Pill type="solid" colorType="grey">
                            Label
                        </Pill>
                        <Pill type="solid" colorType="green">
                            Label
                        </Pill>
                        <Pill type="solid" colorType="yellow">
                            Label
                        </Pill>
                        <Pill type="solid" colorType="red">
                            Label
                        </Pill>
                        <Pill type="solid" colorType="blue">
                            Label
                        </Pill>
                    </Row>
                </Grid>
            </StoryContainer>
        );
    },
};
