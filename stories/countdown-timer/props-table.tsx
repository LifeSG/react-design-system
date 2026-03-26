import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { CountdownTimerPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "CountdownTimerProps",
                content: <ApiTable sections={CountdownTimerPropsData} />,
            },
        ]}
    />
);
