import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    InputNestedSelectOptionsPropsData,
    InputNestedSelectPropsData,
    InputNestedSelectSharedPropsData,
    L1OptionPropsData,
    L2OptionPropsData,
    L3OptionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputNestedSelectProps",
                content: <ApiTable sections={InputNestedSelectPropsData} />,
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
