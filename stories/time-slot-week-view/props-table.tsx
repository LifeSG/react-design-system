import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { TimeSlotWeekView } from "src/time-slot-week-view";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeSlotWeekView",
                content: <ArgTypes of={TimeSlotWeekView} />,
            },
        ]}
    />
);
