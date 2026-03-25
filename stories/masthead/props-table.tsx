import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Masthead } from "src/masthead";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Masthead", content: <ArgTypes of={Masthead} /> }]}
    />
);
