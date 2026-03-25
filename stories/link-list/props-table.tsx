import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { LinkList } from "src/link-list";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "LinkList", content: <ArgTypes of={LinkList} /> }]}
    />
);
