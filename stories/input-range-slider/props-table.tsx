import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { InputRangeSlider } from "src/input-range-slider";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputRangeSlider",
                content: <ArgTypes of={InputRangeSlider} />,
            },
        ]}
    />
);
