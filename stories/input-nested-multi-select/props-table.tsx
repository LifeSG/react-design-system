import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputNestedMultiSelectPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputNestedMultiSelectProps",
                content: (
                    <ApiTable sections={InputNestedMultiSelectPropsData} />
                ),
            },
        ]}
    />
);
