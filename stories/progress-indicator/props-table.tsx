import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { ProgressIndicator } from "src/progress-indicator";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ProgressIndicator",
                content: <ArgTypes of={ProgressIndicator} />,
            },
        ]}
    />
);
