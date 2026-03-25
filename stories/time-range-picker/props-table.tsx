import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { TimeRangePicker } from "src/time-range-picker";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeRangePicker",
                content: <ArgTypes of={TimeRangePicker} />,
            },
        ]}
    />
);
