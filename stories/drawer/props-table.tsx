import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { DrawerPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DrawerProps",
                content: <ApiTable sections={DrawerPropsData} />,
            },
        ]}
    />
);
