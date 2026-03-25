import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { UnitNumberInput } from "src/unit-number";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "UnitNumberInput",
                content: <ArgTypes of={UnitNumberInput} />,
            },
        ]}
    />
);
