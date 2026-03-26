import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    TimeTablePopoverPropsData,
    TimeTablePropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeTableProps",
                content: <ApiTable sections={TimeTablePropsData} />,
            },
            {
                label: "TimeTablePopoverProps",
                content: <ApiTable sections={TimeTablePopoverPropsData} />,
            },
        ]}
    />
);
