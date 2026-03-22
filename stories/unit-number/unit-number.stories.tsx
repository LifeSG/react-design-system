import type { Meta } from "@storybook/react-webpack5";
import { UnitNumberInput } from "src/unit-number";

type Component = typeof UnitNumberInput;

const meta: Meta<Component> = {
    title: "Data Input/Unit Number Input",
    component: UnitNumberInput,
    tags: [
        "unit-number",
        "floor",
        "unit",
        "address",
        "singapore",
        "structured-input",
    ],
};

export default meta;
