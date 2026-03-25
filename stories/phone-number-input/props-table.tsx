import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { PhoneNumberInput } from "src/phone-number-input";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PhoneNumberInput",
                content: <ArgTypes of={PhoneNumberInput} />,
            },
        ]}
    />
);
