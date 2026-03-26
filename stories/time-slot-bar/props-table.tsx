import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TimeSlotBarPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeSlotBarProps",
                content: <ApiTable sections={TimeSlotBarPropsData} />,
            },
        ]}
    />
);
