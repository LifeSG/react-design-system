import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { PredictiveTextInput } from "src/predictive-text-input";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PredictiveTextInput",
                content: <ArgTypes of={PredictiveTextInput} />,
            },
        ]}
    />
);
