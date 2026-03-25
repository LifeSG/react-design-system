import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Textarea } from "src/input-textarea";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "InputTextarea", content: <ArgTypes of={Textarea} /> }]}
    />
);
