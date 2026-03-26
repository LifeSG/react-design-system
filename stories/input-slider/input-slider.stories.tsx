import type { Meta } from "@storybook/react-webpack5";
import { InputSlider } from "src/input-slider";

type Component = typeof InputSlider;

const meta: Meta<Component> = {
    title: "Data Input/Input Slider",
    component: InputSlider,
    tags: ["slider", "range", "numeric", "single-thumb", "form"],
};

export default meta;
