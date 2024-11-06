import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { V2_Text } from "src/v2_text";
import { SelectHistogram } from "../../../src/select-histogram";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

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
    render: () => {
        return (
            <StoryContainer>
                <Container>
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
                </Container>
            </StoryContainer>
        );
    },
};

export const EmptyBins: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
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
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.SelectHistogram
                    label="A shorter form input"
                    histogramSlider={{
                        bins: BINS_DATA,
                        interval: 100,
                    }}
                    value={[100, 400]}
                    rangeLabelPrefix="$"
                    mobileCols={[1, 5]}
                />
                <Form.SelectHistogram
                    label="A longer form input"
                    histogramSlider={{
                        bins: BINS_DATA,

                        interval: 100,
                    }}
                    value={[100, 400]}
                    rangeLabelPrefix="$"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
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
                    <SelectHistogram
                        histogramSlider={{
                            bins: BINS_DATA,

                            interval: 100,
                        }}
                        value={[100, 200]}
                        rangeLabelPrefix="$"
                    />
                </Container>
            </StoryContainer>
        );
    },
};
