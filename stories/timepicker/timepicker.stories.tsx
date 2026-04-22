import type { Meta } from "@storybook/react-webpack5";
import { Timepicker } from "src/timepicker";

type Component = typeof Timepicker;

const meta: Meta<Component> = {
    title: "Data Input/Timepicker",
    component: Timepicker,
    tags: ["timepicker", "time", "clock", "12hr", "24hr", "form"],
};

export default meta;
