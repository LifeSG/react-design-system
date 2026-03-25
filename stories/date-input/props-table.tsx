import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { DateInput } from "src/date-input";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "DateInput", content: <ArgTypes of={DateInput} /> }]}
    />
);
