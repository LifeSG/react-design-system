import type { Meta } from "@storybook/react-webpack5";
import { HistogramSlider } from "src/histogram-slider";

type Component = typeof HistogramSlider;

const meta: Meta<Component> = {
    title: "Data Input/Histogram Slider",
    component: HistogramSlider,
    tags: [
        "histogram",
        "slider",
        "range",
        "filter",
        "frequency",
        "distribution",
        "chart",
    ],
};

export default meta;
