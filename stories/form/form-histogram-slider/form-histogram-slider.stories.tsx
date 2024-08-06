import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { HistogramSlider } from "src/histogram-slider";
import { v2_Layout } from "src/v2_layout";
import { v2_Text } from "src/v2_text";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";
import { BIN_DATA, LARGE_BIN_DATA } from "./histogram-data";

type Component = typeof Form.HistogramSlider;

const meta: Meta<Component> = {
    title: "Form/HistogramSlider",
    component: Form.HistogramSlider,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
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
                                No results found, try changing your search
                                criteria.
                            </div>
                        )}
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
                                <v2_Text.XSmall weight="semibold">
                                    1 photo
                                </v2_Text.XSmall>
                            ) : (
                                <v2_Text.XSmall weight="semibold">
                                    {val} photos
                                </v2_Text.XSmall>
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
            <v2_Layout.V2_Content type="grid" style={{ padding: "2rem" }}>
                <Form.HistogramSlider
                    label="A shorter form input"
                    mobileCols={[1, 5]}
                    bins={LARGE_BIN_DATA}
                    interval={100}
                />
                <Form.HistogramSlider
                    label="A longer form input"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                    bins={LARGE_BIN_DATA}
                    interval={100}
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
                    <HistogramSlider bins={BIN_DATA} interval={100} />
                </Container>
            </StoryContainer>
        );
    },
};
