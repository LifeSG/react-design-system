import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Avatar } from "src/avatar";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Avatar", content: <ArgTypes of={Avatar} /> }]}
    />
);
