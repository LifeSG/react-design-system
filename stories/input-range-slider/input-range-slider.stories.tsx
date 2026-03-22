import type { Meta } from "@storybook/react-webpack5";
import { InputRangeSlider } from "src/input-range-slider";

type Component = typeof InputRangeSlider;

const meta: Meta<Component> = {
    title: "Data Input/Input Range Slider",
    component: InputRangeSlider,
    tags: [
        "range-slider",
        "dual-thumb",
        "numeric-range",
        "slider",
        "filter",
        "histogram",
    ],
};

export default meta;
