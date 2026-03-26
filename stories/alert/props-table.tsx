import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { AlertPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "AlertProps",
                content: <ApiTable sections={AlertPropsData} />,
            },
        ]}
    />
);
