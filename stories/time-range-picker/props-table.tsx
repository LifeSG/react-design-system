import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TimeRangePickerPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimeRangePickerProps",
                content: <ApiTable sections={TimeRangePickerPropsData} />,
            },
        ]}
    />
);
