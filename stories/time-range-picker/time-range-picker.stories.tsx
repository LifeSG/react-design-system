import type { Meta } from "@storybook/react-webpack5";
import { TimeRangePicker } from "src/time-range-picker";

type Component = typeof TimeRangePicker;

const meta: Meta<Component> = {
    title: "Data Input/Time Range Picker",
    component: TimeRangePicker,
    tags: [
        "time-range",
        "start-end",
        "clock",
        "12hr",
        "24hr",
        "from-to",
        "form",
    ],
};

export default meta;
