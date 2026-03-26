import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { DateRangeInputPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DateRangeInputProps",
                content: <ApiTable sections={DateRangeInputPropsData} />,
            },
        ]}
    />
);
