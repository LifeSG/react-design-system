import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputRangeSelect } from "src/input-range-select";
import { InputRangeSelectOptionsPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputRangeSelect",
                content: <ArgTypes of={InputRangeSelect} />,
            },
            {
                label: "InputRangeSelectOptionsProps",
                content: (
                    <ApiTable sections={InputRangeSelectOptionsPropsData} />
                ),
            },
        ]}
    />
);
