import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { HistogramSlider } from "src/histogram-slider";
import { Layout } from "src/layout";
import { Typography } from "src/typography";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";
import { BIN_DATA, LARGE_BIN_DATA } from "./histogram-data";

type Component = typeof Form.HistogramSlider;

const meta: Meta<Component> = {
    title: "Form/HistogramSlider",
    component: Form.HistogramSlider,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.HistogramSlider
                    label="This is the histogram slider"
                    bins={[
                        { count: 0, minValue: 0 },
                        { count: 10, minValue: 100 },
                        { count: 8, minValue: 200 },
                        { count: 12, minValue: 300 },
                        { count: 7, minValue: 400 },
                        { count: 5, minValue: 500 },
                        { count: 3, minValue: 600 },
                        { count: 0, minValue: 700 },
                    ]}
                    rangeLabelPrefix="$"
                    interval={100}
                    value={[100, 400]}
                />
                <Form.HistogramSlider
                    label="This is the disabled state"
                    bins={BIN_DATA}
                    interval={100}
                    disabled
                />
                <Form.HistogramSlider
                    label="This is the read-only state"
                    bins={BIN_DATA}
                    interval={100}
                    readOnly
                />
                <Form.HistogramSlider
                    label="This is the error state"
                    errorMessage="Out of range"
                    bins={BIN_DATA}
                    interval={100}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const EmptyBins: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.HistogramSlider
                    label="This has no data"
                    bins={[
                        { count: 0, minValue: 100 },
                        { count: 0, minValue: 200 },
                        { count: 0, minValue: 600 },
                        { count: 0, minValue: 400 },
                        { count: 0, minValue: 300 },
                    ]}
                    interval={100}
                    renderEmptyView={() => (
                        <div
                            style={{
                                padding: "1rem",
                                background: "#fafafa",
                                textAlign: "center",
                            }}
                        >
                            No results found, try changing your search criteria.
                        </div>
                    )}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithLabels: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.HistogramSlider
                    label="With unit as prefix"
                    bins={BIN_DATA}
                    interval={100}
                    showRangeLabels
                    rangeLabelPrefix="$"
                />
                <Form.HistogramSlider
                    label="With unit as suffix"
                    bins={BIN_DATA}
                    interval={100}
                    showRangeLabels
                    rangeLabelSuffix="km"
                />
                <Form.HistogramSlider
                    label="With custom rendering"
                    bins={BIN_DATA}
                    interval={100}
                    showRangeLabels
                    renderRangeLabel={(val) =>
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
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.HistogramSlider
                    label="A shorter form input"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                    bins={LARGE_BIN_DATA}
                    interval={100}
                />
                <Form.HistogramSlider
                    label="A longer form input"
                    xxsCols={[1, 9]}
                    bins={LARGE_BIN_DATA}
                    interval={100}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<Component> = {
    render: (_args) => {
        return <HistogramSlider bins={BIN_DATA} interval={100} />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
