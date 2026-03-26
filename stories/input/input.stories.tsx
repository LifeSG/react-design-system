import type { Meta } from "@storybook/react-webpack5";
import { Input } from "src/input";

type Component = typeof Input;

const meta: Meta<Component> = {
    title: "Data Input/Input",
    component: Input,
    tags: ["input", "text-field", "text-input", "single-line", "field", "form"],
};

export default meta;
