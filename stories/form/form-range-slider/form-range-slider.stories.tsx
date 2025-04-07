import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputRangeSlider } from "src/input-range-slider";
import { Layout } from "src/layout";
import { Typography } from "src/typography";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.RangeSlider;

const meta: Meta<Component> = {
    title: "Form/RangeSlider",
    component: Form.RangeSlider,
};

export default meta;

export const RangeSlider: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const MinimumRange: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.RangeSlider
                label="This has a min range"
                value={[0, 30]}
                minRange={30}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const ColorCustomisation: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.RangeSlider
                label="This has custom colors"
                numOfThumbs={4}
                value={[10, 20, 30, 80]}
                colors={["red", "orange", "green", "blue", "purple"]}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithLabels: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
                <Form.RangeSlider
                    label="With indicator"
                    min={1}
                    max={10}
                    showIndicatorLabel
                    indicatorLabelPrefix="Showing "
                    indicatorLabelSuffix=" items"
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
                <Form.RangeSlider
                    label="A shorter form input"
                    value={[25, 50]}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.RangeSlider
                    label="A longer form input"
                    value={[25, 50]}
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<Component> = {
    render: (_args) => {
        return <InputRangeSlider step={10} />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
