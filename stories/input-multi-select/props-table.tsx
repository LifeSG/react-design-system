import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputMultiSelectPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputMultiSelectProps",
                content: <ApiTable sections={InputMultiSelectPropsData} />,
            },
        ]}
    />
);
