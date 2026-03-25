import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Checkbox } from "src/checkbox";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Checkbox", content: <ArgTypes of={Checkbox} /> }]}
    />
);
