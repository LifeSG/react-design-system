import type { Meta } from "@storybook/react-webpack5";
import { PhoneNumberInput } from "src/phone-number-input";

type Component = typeof PhoneNumberInput;

const meta: Meta<Component> = {
    title: "Data Input/Phone Number Input",
    component: PhoneNumberInput,
    tags: [
        "phone",
        "phone-number",
        "country-code",
        "international",
        "telephone",
        "form",
    ],
};

export default meta;
