import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    CalendarMultiPropsData,
    CalendarPropsData,
    CalendarSinglePropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "CalendarProps",
                content: <ApiTable sections={CalendarPropsData} />,
            },
            {
                label: "CalendarSingleProps",
                content: <ApiTable sections={CalendarSinglePropsData} />,
            },
            {
                label: "CalendarMultiProps",
                content: <ApiTable sections={CalendarMultiPropsData} />,
            },
        ]}
    />
);
