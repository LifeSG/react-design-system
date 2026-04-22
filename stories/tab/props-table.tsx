import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    TabItemPropsData,
    TabPropsData,
    TitleAddonPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TabProps",
                content: <ApiTable sections={TabPropsData} />,
            },
            {
                label: "TabItemProps",
                content: <ApiTable sections={TabItemPropsData} />,
            },
            {
                label: "TitleAddonProps",
                content: <ApiTable sections={TitleAddonPropsData} />,
            },
        ]}
    />
);
