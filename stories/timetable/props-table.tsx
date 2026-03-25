import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TimeTable } from "src/timetable";
import { TimeTablePopoverPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "TimeTable", content: <ArgTypes of={TimeTable} /> },
            {
                label: "TimeTablePopoverProps",
                content: <ApiTable sections={TimeTablePopoverPropsData} />,
            },
        ]}
    />
);
