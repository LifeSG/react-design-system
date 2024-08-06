import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputSlider } from "src/input-slider";
import { v2_Layout } from "src/v2_layout";
import { V2_Text } from "src/v2_text";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.Slider;

const meta: Meta<Component> = {
    title: "Form/Slider",
    component: Form.Slider,
};

export default meta;

export const Slider: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Slider label="This is the slider" />
                    <Form.Slider
                        label="This is the disabled state"
                        value={25}
                        disabled
                    />
                    <Form.Slider
                        label="This is the read-only state"
                        value={75}
                        readOnly
                    />
                    <Form.Slider
                        label="This is the error state"
                        errorMessage="Out of range"
                        value={50}
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
                    <Form.Slider
                        label="This has custom colors"
                        colors={[
                            "linear-gradient(to right, red 0%, blue 50%)",
                            "linear-gradient(to right, blue 0%, red 50%)",
                        ]}
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
                    <Form.Slider
                        label="With unit as prefix"
                        showSliderLabels
                        sliderLabelPrefix="$"
                    />
                    <Form.Slider
                        label="With unit as suffix"
                        showSliderLabels
                        sliderLabelSuffix="km"
                    />
                    <Form.Slider
                        label="With custom rendering"
                        min={1}
                        max={10}
                        showSliderLabels
                        renderSliderLabel={(val) =>
                            val === 1 ? (
                                <V2_Text.XSmall weight="semibold">
                                    1 photo
                                </V2_Text.XSmall>
                            ) : (
                                <V2_Text.XSmall weight="semibold">
                                    {val} photos
                                </V2_Text.XSmall>
                            )
                        }
                    />
                    <Form.Slider
                        label="With indicator"
                        min={1}
                        max={10}
                        showIndicatorLabel
                        indicatorLabelPrefix="Showing "
                        indicatorLabelSuffix=" item(s)"
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <v2_Layout.V2_Content type="grid" style={{ padding: "2rem" }}>
                <Form.Slider label="A shorter form input" mobileCols={[1, 5]} />
                <Form.Slider
                    label="A longer form input"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </v2_Layout.V2_Content>
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
                    <InputSlider step={5} />
                </Container>
            </StoryContainer>
        );
    },
};
