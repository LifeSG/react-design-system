import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Timeline } from "src/timeline";
import { TimelineItemPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Timeline", content: <ArgTypes of={Timeline} /> },
            {
                label: "TimelineItemProps",
                content: <ApiTable sections={TimelineItemPropsData} />,
            },
        ]}
    />
);
