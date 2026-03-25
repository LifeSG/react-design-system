import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Card } from "src/card";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Card", content: <ArgTypes of={Card} /> }]}
    />
);
