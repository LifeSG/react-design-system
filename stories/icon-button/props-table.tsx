import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { IconButton } from "src/icon-button";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "IconButton", content: <ArgTypes of={IconButton} /> }]}
    />
);
