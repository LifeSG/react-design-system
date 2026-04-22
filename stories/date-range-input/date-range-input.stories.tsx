import type { Meta } from "@storybook/react-webpack5";
import { DateRangeInput } from "src/date-range-input";

type Component = typeof DateRangeInput;

const meta: Meta<Component> = {
    title: "Data Input/Date Range Input",
    component: DateRangeInput,
    tags: [
        "date-range",
        "date-picker",
        "start-end",
        "calendar",
        "from-to",
        "form",
    ],
};

export default meta;
