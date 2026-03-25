import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Input } from "src/input";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Input", content: <ArgTypes of={Input} /> }]}
    />
);
