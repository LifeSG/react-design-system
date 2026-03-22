import type { Meta } from "@storybook/react-webpack5";
import { InputGroup } from "src/input-group";

type Component = typeof InputGroup;

const meta: Meta<Component> = {
    title: "Data Input/Input Group",
    component: InputGroup,
    tags: ["input-group", "addon", "prefix", "suffix", "label-addon", "input"],
};

export default meta;
