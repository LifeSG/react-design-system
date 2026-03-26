import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { DateNavigatorPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DateNavigatorProps",
                content: <ApiTable sections={DateNavigatorPropsData} />,
            },
        ]}
    />
);
