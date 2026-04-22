import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TimepickerPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TimepickerProps",
                content: <ApiTable sections={TimepickerPropsData} />,
            },
        ]}
    />
);
