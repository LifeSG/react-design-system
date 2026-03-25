import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Markup } from "src/markup";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Markup", content: <ArgTypes of={Markup} /> }]}
    />
);
