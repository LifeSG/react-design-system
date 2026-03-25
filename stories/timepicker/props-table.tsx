import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Timepicker } from "src/timepicker";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Timepicker", content: <ArgTypes of={Timepicker} /> }]}
    />
);
