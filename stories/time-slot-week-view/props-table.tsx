import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TimeSlotWeekViewPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeSlotWeekViewProps",
                content: <ApiTable sections={TimeSlotWeekViewPropsData} />,
            },
        ]}
    />
);
