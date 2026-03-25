import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Breadcrumb } from "src/breadcrumb";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Breadcrumb", content: <ArgTypes of={Breadcrumb} /> }]}
    />
);
