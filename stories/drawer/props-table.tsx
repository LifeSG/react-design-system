import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Drawer } from "src/drawer";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Drawer", content: <ArgTypes of={Drawer} /> }]}
    />
);
