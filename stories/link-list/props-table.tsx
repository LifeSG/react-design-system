import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { LinkListPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "LinkListProps",
                content: <ApiTable sections={LinkListPropsData} />,
            },
        ]}
    />
);
