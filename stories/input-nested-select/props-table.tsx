import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputNestedSelect } from "src/input-nested-select";
import {
    InputNestedSelectOptionsPropsData,
    InputNestedSelectSharedPropsData,
    L1OptionPropsData,
    L2OptionPropsData,
    L3OptionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputNestedSelect",
                content: <ArgTypes of={InputNestedSelect} />,
            },
            {
                label: "InputNestedSelectOptionsProps",
                content: (
                    <ApiTable sections={InputNestedSelectOptionsPropsData} />
                ),
            },
            {
                label: "InputNestedSelectSharedProps",
                content: (
                    <ApiTable sections={InputNestedSelectSharedPropsData} />
                ),
            },
            {
                label: "L1OptionProps",
                content: <ApiTable sections={L1OptionPropsData} />,
            },
            {
                label: "L2OptionProps",
                content: <ApiTable sections={L2OptionPropsData} />,
            },
            {
                label: "L3OptionProps",
                content: <ApiTable sections={L3OptionPropsData} />,
            },
        ]}
    />
);
