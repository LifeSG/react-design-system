import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Pill } from "src/pill";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Pill", content: <ArgTypes of={Pill} /> }]}
    />
);
