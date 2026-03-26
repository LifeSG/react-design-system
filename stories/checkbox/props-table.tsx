import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { CheckboxPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "CheckboxProps",
                content: <ApiTable sections={CheckboxPropsData} />,
            },
        ]}
    />
);
