import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { InputNestedMultiSelect } from "src/input-nested-multi-select";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputNestedMultiSelect",
                content: <ArgTypes of={InputNestedMultiSelect} />,
            },
        ]}
    />
);
