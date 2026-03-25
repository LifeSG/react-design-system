import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Badge } from "src/badge";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Badge", content: <ArgTypes of={Badge} /> }]}
    />
);
