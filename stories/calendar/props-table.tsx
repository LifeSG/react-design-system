import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Calendar } from "src/calendar";
import {
    CalendarMultiPropsData,
    CalendarSinglePropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Calendar", content: <ArgTypes of={Calendar} /> },
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
