import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Tag } from "src/tag";

export const PropsTableTabs = () => (
    <PropTableTabs tabs={[{ label: "Tag", content: <ArgTypes of={Tag} /> }]} />
);
