import type { Meta } from "@storybook/react-webpack5";
import { MaskedInput } from "src/masked-input";

type Component = typeof MaskedInput;

const meta: Meta<Component> = {
    title: "Data Input/Masked Input",
    component: MaskedInput,
    tags: [
        "masked-input",
        "password",
        "sensitive",
        "show-hide",
        "obfuscate",
        "secure",
    ],
};

export default meta;
