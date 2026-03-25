import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Tab } from "src/tab";
import { TabItemPropsData, TitleAddonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Tab", content: <ArgTypes of={Tab} /> },
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
