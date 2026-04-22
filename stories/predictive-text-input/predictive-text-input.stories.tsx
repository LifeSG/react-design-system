import type { Meta } from "@storybook/react-webpack5";
import { PredictiveTextInput } from "src/predictive-text-input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
    title: "Data Input/Predictive Text Input",
    component: PredictiveTextInput,
    tags: [
        "predictive-text",
        "autocomplete",
        "typeahead",
        "suggestions",
        "search",
        "form",
    ],
};

export default meta;
