import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TagPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TagProps",
                content: <ApiTable sections={TagPropsData} />,
            },
        ]}
    />
);
