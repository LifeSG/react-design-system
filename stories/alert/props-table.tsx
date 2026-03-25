import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Alert } from "src/alert";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Alert", content: <ArgTypes of={Alert} /> }]}
    />
);
