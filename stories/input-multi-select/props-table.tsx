import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { InputMultiSelect } from "src/input-multi-select";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputMultiSelect",
                content: <ArgTypes of={InputMultiSelect} />,
            },
        ]}
    />
);
