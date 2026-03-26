import type { Meta } from "@storybook/react-webpack5";
import { Textarea } from "src/input-textarea";

type Component = typeof Textarea;

const meta: Meta<Component> = {
    title: "Data Input/Input Textarea",
    component: Textarea,
    tags: [
        "textarea",
        "multi-line",
        "text-field",
        "input",
        "form",
        "character-count",
    ],
};

export default meta;
