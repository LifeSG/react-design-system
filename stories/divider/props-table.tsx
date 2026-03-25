import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Divider } from "src/divider";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Divider", content: <ArgTypes of={Divider} /> }]}
    />
);
