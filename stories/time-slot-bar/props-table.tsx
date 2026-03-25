import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { TimeSlotBar } from "src/time-slot-bar";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "TimeSlotBar", content: <ArgTypes of={TimeSlotBar} /> },
        ]}
    />
);
