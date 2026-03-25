import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { BoxContainer } from "src/box-container";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "BoxContainer", content: <ArgTypes of={BoxContainer} /> },
        ]}
    />
);
