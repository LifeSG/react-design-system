import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Table } from "src/table";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Table", content: <ArgTypes of={Table} /> }]}
    />
);
