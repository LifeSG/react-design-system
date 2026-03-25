import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { InputSlider } from "src/input-slider";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "InputSlider", content: <ArgTypes of={InputSlider} /> },
        ]}
    />
);
