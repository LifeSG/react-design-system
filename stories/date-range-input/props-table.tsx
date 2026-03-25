import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { DateRangeInput } from "src/date-range-input";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DateRangeInput",
                content: <ArgTypes of={DateRangeInput} />,
            },
        ]}
    />
);
