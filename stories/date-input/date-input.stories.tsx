import type { Meta } from "@storybook/react-webpack5";
import { DateInput } from "src/date-input";

type Component = typeof DateInput;

const meta: Meta<Component> = {
    title: "Data Input/Date Input",
    component: DateInput,
    tags: [
        "date-input",
        "date-picker",
        "calendar",
        "date",
        "form",
        "single-date",
    ],
};

export default meta;
