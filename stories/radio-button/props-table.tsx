import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { RadioButton } from "src/radio-button";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "RadioButton", content: <ArgTypes of={RadioButton} /> },
        ]}
    />
);
