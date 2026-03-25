import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { TimeSlotBarWeek } from "src/time-slot-bar-week";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeSlotBarWeek",
                content: <ArgTypes of={TimeSlotBarWeek} />,
            },
        ]}
    />
);
