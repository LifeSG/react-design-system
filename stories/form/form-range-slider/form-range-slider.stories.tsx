import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputRangeSlider } from "src/input-range-slider";
import { Layout } from "src/layout";
import { Text } from "src/text";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.RangeSlider;

const meta: Meta<Component> = {
    title: "Form/RangeSlider",
    component: Form.RangeSlider,
};

export default meta;

export const RangeSlider: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.RangeSlider
                        label="This is the range slider"
                        value={[10, 20]}
                    />
                    <Form.RangeSlider
                        label="This has three thumbs"
                        numOfThumbs={3}
                        value={[15, 35, 55]}
                    />
                    <Form.RangeSlider
                        label="This is the disabled state"
                        value={[25, 50]}
                        disabled
                    />
                    <Form.RangeSlider
                        label="This is the read-only state"
                        value={[50, 75]}
                        readOnly
                    />
                    <Form.RangeSlider
                        label="This is the error state"
                        value={[10, 30]}
                        errorMessage="Out of range"
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const MinimumRange: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.RangeSlider
                        label="This has a min range"
                        value={[0, 30]}
                        minRange={30}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const ColorCustomisation: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.RangeSlider
                        label="This has custom colors"
                        numOfThumbs={4}
                        value={[10, 20, 30, 80]}
                        colors={["red", "orange", "green", "blue", "purple"]}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const WithLabels: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.RangeSlider
                        label="With unit as prefix"
                        showSliderLabels
                        sliderLabelPrefix="$"
                    />
                    <Form.RangeSlider
                        label="With unit as suffix"
                        showSliderLabels
                        sliderLabelSuffix="km"
                    />
                    <Form.RangeSlider
                        label="With custom rendering"
                        min={1}
                        max={10}
                        showSliderLabels
                        renderSliderLabel={(val) =>
                            val === 1 ? (
                                <Text.XSmall weight="semibold">
                                    1 photo
                                </Text.XSmall>
                            ) : (
                                <Text.XSmall weight="semibold">
                                    {val} photos
                                </Text.XSmall>
                            )
                        }
                    />
                    <Form.RangeSlider
                        label="With indicator"
                        min={1}
                        max={10}
                        showIndicatorLabel
                        indicatorLabelPrefix="Showing "
                        indicatorLabelSuffix=" items"
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.RangeSlider
                    label="A shorter form input"
                    mobileCols={[1, 5]}
                    value={[25, 50]}
                />
                <Form.RangeSlider
                    label="A longer form input"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                    value={[25, 50]}
                />
            </Layout.Content>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const StandaloneUsage: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <InputRangeSlider step={10} />
                </Container>
            </StoryContainer>
        );
    },
};
