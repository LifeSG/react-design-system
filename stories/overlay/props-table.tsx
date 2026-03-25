import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { Overlay } from "src/overlay";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Overlay", content: <ArgTypes of={Overlay} /> }]}
    />
);
