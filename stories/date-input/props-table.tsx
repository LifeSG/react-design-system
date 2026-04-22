import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { DateInputPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DateInputProps",
                content: <ApiTable sections={DateInputPropsData} />,
            },
        ]}
    />
);
