import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TimelineItemPropsData, TimelinePropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimelineProps",
                content: <ApiTable sections={TimelinePropsData} />,
            },
            {
                label: "TimelineItemProps",
                content: <ApiTable sections={TimelineItemPropsData} />,
            },
        ]}
    />
);
