import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { BadgePropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "BadgeProps",
                content: <ApiTable sections={BadgePropsData} />,
            },
        ]}
    />
);
