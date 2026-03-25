import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { CountdownTimer } from "src/countdown-timer";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "CountdownTimer",
                content: <ArgTypes of={CountdownTimer} />,
            },
        ]}
    />
);
