import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { SelectHistogram } from "src/select-histogram";
import { Typography } from "src/typography";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.SelectHistogram;

const meta: Meta<Component> = {
    title: "Form/SelectHistogram",
    component: Form.SelectHistogram,
};

export default meta;

const BINS_DATA = [
    { count: 0, minValue: 0 },
    { count: 10, minValue: 100 },
    { count: 8, minValue: 200 },
    { count: 12, minValue: 300 },
    { count: 7, minValue: 400 },
    { count: 9, minValue: 700 },
];

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.SelectHistogram
                    label="This is the select field"
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                />
                <Form.SelectHistogram
                    label="This is the disabled state"
                    disabled
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                />
                <Form.SelectHistogram
                    label="This is the readonly state"
                    readOnly
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                />
                <Form.SelectHistogram
                    label="This is the error state"
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                    errorMessage="Out of range"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const EmptyBins: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.SelectHistogram
                label="This has no data"
                histogramSlider={{
                    bins: [],
                    interval: 100,
                    renderEmptyView: () => (
                        <div
                            style={{
                                padding: "1rem",
                                background: "#fafafa",
                                textAlign: "center",
                            }}
                        >
                            No results found.
                        </div>
                    ),
                }}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithLabels: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.SelectHistogram
                    label="With unit as prefix"
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                    rangeLabelPrefix="$"
                    value={[100, 400]}
                />
                <Form.SelectHistogram
                    label="With unit as suffix"
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                    value={[100, 400]}
                    rangeLabelSuffix="km"
                />
                <Form.SelectHistogram
                    label="With custom rendering"
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                    value={[100, 400]}
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
                <Form.SelectHistogram
                    label="A shorter form input"
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                    value={[100, 400]}
                    rangeLabelPrefix="$"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.SelectHistogram
                    label="A longer form input"
                    histogramSlider={{
                        bins: BINS_DATA,

                        interval: 100,
                    }}
                    value={[100, 400]}
                    rangeLabelPrefix="$"
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<Component> = {
    render: (_args) => {
        return (
            <SelectHistogram
                histogramSlider={{
                    bins: BINS_DATA,

                    interval: 100,
                }}
                value={[100, 200]}
                rangeLabelPrefix="$"
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
