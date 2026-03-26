import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TimeSlotBarWeekPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeSlotBarWeekProps",
                content: <ApiTable sections={TimeSlotBarWeekPropsData} />,
            },
        ]}
    />
);
