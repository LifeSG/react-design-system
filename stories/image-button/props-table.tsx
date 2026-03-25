import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { ImageButton } from "src/image-button";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "ImageButton", content: <ArgTypes of={ImageButton} /> },
        ]}
    />
);
