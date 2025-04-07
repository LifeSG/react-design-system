import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputSlider } from "src/input-slider";
import { Layout } from "src/layout";
import { Typography } from "src/typography";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.Slider;

const meta: Meta<Component> = {
    title: "Form/Slider",
    component: Form.Slider,
};

export default meta;

export const Slider: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const ColorCustomisation: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.Slider
                label="This has custom colors"
                colors={[
                    "linear-gradient(to right, red 0%, blue 50%)",
                    "linear-gradient(to right, blue 0%, red 50%)",
                ]}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithLabels: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
                            <Typography.BodySM weight="semibold">
                                1 photo
                            </Typography.BodySM>
                        ) : (
                            <Typography.BodySM weight="semibold">
                                {val} photos
                            </Typography.BodySM>
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
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.Slider
                    label="A shorter form input"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.Slider label="A longer form input" xxsCols={[1, 9]} />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<Component> = {
    render: (_args) => {
        return <InputSlider step={5} />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
